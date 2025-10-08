#!/usr/bin/env bash
set -euo pipefail

# === Home Assistant Nightly Commit (Force Push) ===
# Repo: schultz-it/ju7Hy6f6

HA_CONFIG_DIR=${HA_CONFIG_DIR:-/config}
GIT_DEFAULT_BRANCH=${GIT_DEFAULT_BRANCH:-main}
GIT_AUTHOR_NAME=${GIT_AUTHOR_NAME:-"HA Nightly Bot"}
GIT_AUTHOR_EMAIL=${GIT_AUTHOR_EMAIL:-ha-bot@local}
LOG_FILE=${LOG_FILE:-${HA_CONFIG_DIR}/git_log.txt}
GIT_REMOTE=${GIT_REMOTE:-git@github.com:schultz-it/ju7Hy6f6.git}

log() {
    printf "[%(%Y-%m-%d %H:%M:%S)T] %s\n" -1 "$@" | tee -a "$LOG_FILE"
}

cd "$HA_CONFIG_DIR"

# Init repo if needed
if [ ! -d .git ]; then
    log "Initializing git repo in $HA_CONFIG_DIR"
    git init | tee -a "$LOG_FILE"
    git checkout -B "$GIT_DEFAULT_BRANCH" | tee -a "$LOG_FILE" || true
    git config user.name "$GIT_AUTHOR_NAME"
    git config user.email "$GIT_AUTHOR_EMAIL"
fi

# (Git Ignore setup, backup, ecc. - come nello script originale)

# Commit (solo se ci sono modifiche)
if [ -n "$(git status --porcelain)" ]; then
    log "Committing changes"
    git add .
    git commit -m "Home Assistant Nightly Commit (force push)" | tee -a "$LOG_FILE"
    log "Force pushing to $GIT_REMOTE"
    git push --force "$GIT_REMOTE" "$GIT_DEFAULT_BRANCH" | tee -a "$LOG_FILE"
else
    log "No changes to commit"
fi