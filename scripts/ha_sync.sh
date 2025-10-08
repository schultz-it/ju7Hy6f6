#!/usr/bin/env bash
set -euo pipefail

# === Home Assistant Sync Local <-> Remote Main Branch ===
# Repo: schultz-it/ju7Hy6f6

HA_CONFIG_DIR=${HA_CONFIG_DIR:-/config}
GIT_DEFAULT_BRANCH=${GIT_DEFAULT_BRANCH:-main}
GIT_REMOTE=${GIT_REMOTE:-git@github.com:schultz-it/ju7Hy6f6.git}
LOG_FILE=${LOG_FILE:-${HA_CONFIG_DIR}/git_log.txt}

log() {
  printf "[%(%Y-%m-%d %H:%M:%S)T] %s\n" -1 "$@" | tee -a "$LOG_FILE"
}

cd "$HA_CONFIG_DIR"

# Inizializza repo se necessario
if [ ! -d .git ]; then
  log "Initializing git repo in $HA_CONFIG_DIR"
  git init
  git remote add origin "$GIT_REMOTE" 2>/dev/null || true
  git checkout -B "$GIT_DEFAULT_BRANCH" || true
fi

# Salva modifiche locali
if [ -n "$(git status --porcelain)" ]; then
  log "Committing local changes"
  git add .
  git commit -m "Local changes pre-sync"
fi

log "Pulling latest changes from remote and merging"
if git pull origin "$GIT_DEFAULT_BRANCH"; then
  log "Merge completed without conflicts, now local is in sync!"
  log "Pushing local state to remote for final sync"
  git push origin "$GIT_DEFAULT_BRANCH"
else
  log "!!! CI SONO CONFLITTI DA RISOLVERE !!!"
  log "Apri il terminale e risolvi i conflitti manualmente: git status"
fi
