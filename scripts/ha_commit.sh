#!/usr/bin/env bash
set -euo pipefail

# === Home Assistant Nightly Commit (fresh setup) ===
# Repo: schultz-it/ju7Hy6f6
# Safe-by-default: excludes secrets, .storage, DB, backups, logs. Commits only when there are changes.

: "${HA_CONFIG_DIR:=/config}"
: "${GIT_DEFAULT_BRANCH:=main}"
: "${GIT_AUTHOR_NAME:=HA Nightly Bot}"
: "${GIT_AUTHOR_EMAIL:=ha-bot@local}"
: "${LOG_FILE:=${HA_CONFIG_DIR}/git_log.txt}"
# Optionally set GIT_REMOTE to override auto-detected 'origin'
: "${GIT_REMOTE:=git@github.com:schultz-it/ju7Hy6f6.git}"

log() { printf "[%(%Y-%m-%d %H:%M:%S)T] %s\n" -1 "$@" | tee -a "${LOG_FILE}"; }

cd "${HA_CONFIG_DIR}"

# Init repo if needed
if [ ! -d .git ]; then
  log "Initializing git repo in $HA_CONFIG_DIR"
  git init | tee -a "${LOG_FILE}"
  git checkout -B "${GIT_DEFAULT_BRANCH}" | tee -a "${LOG_FILE}" || true
  git config user.name "${GIT_AUTHOR_NAME}"
  git config user.email "${GIT_AUTHOR_EMAIL}"
fi

# Harden .gitignore (append only if patterns missing)
ensure_ignore() { local p="$1"; grep -qxF "$p" .gitignore 2>/dev/null || echo "$p" >> .gitignore; }
touch .gitignore
# secrets & credentials
ensure_ignore "secrets.yaml"
ensure_ignore "*.key"; ensure_ignore "*.pem"; ensure_ignore "*.crt"; ensure_ignore "*.cer"; ensure_ignore "*.p12"
ensure_ignore ".git-credentials"; ensure_ignore ".netrc"
# storage / tokens
ensure_ignore ".storage/"; ensure_ignore ".cloud/"; ensure_ignore ".ios.conf"; ensure_ignore ".ha-cache/"
# db & logs
ensure_ignore "home-assistant_v2.db"; ensure_ignore "home-assistant_v2.db-*"
ensure_ignore "*.db"; ensure_ignore "*.db-shm"; ensure_ignore "*.db-wal"; ensure_ignore "*.db-journal"; ensure_ignore "*.sqlite*"
ensure_ignore "*.log"; ensure_ignore "*.log.*"
# backups & temp
ensure_ignore ".backups/"; ensure_ignore "backup/"; ensure_ignore "tmp/"; ensure_ignore "temp/"
# deps
ensure_ignore "deps/"; ensure_ignore "node_modules/"
# media cache
ensure_ignore "media/**"; ensure_ignore "!.gitkeep"
# venv
ensure_ignore ".venv/"; ensure_ignore "venv/"
# OS/IDE noise
ensure_ignore ".DS_Store"; ensure_ignore "Thumbs.db"; ensure_ignore ".vscode/"; ensure_ignore ".idea/"
# personal junk
ensure_ignore "*.bak"

git config core.autocrlf false

# Preflight: basic leak guard (prints and aborts if patterns would be committed)
leaky=$(git ls-files -o --exclude-standard | grep -E '\.(p?12|key|pem|crt|cer|pfx)$' || true)
if [ -n "$leaky" ]; then
  log "Potentially sensitive new files detected (cert/keys). Aborting commit:"
  printf "%s\n" "$leaky" | tee -a "${LOG_FILE}"
  exit 2
fi

# Stage changes respecting .gitignore
git add -A
if git diff --cached --quiet; then
  log "No changes to commit."
  exit 0
fi

ts="$(date +'%Y-%m-%d %H:%M:%S %Z')"
msg="HA nightly commit: $ts"
log "Committing: $msg"
git commit -m "$msg" | tee -a "${LOG_FILE}"

# Remote setup if missing
if ! git remote | grep -qx "origin"; then
  log "Setting origin to git@github.com:schultz-it/ju7Hy6f6.git"
  git remote add origin "git@github.com:schultz-it/ju7Hy6f6.git"
fi

current_branch="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "${GIT_DEFAULT_BRANCH}")"
log "Pushing $current_branch -> origin/${GIT_DEFAULT_BRANCH}"
git push origin "$current_branch:${GIT_DEFAULT_BRANCH}" | tee -a "${LOG_FILE}"
log "Done."
