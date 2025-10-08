#!/usr/bin/env bash
set -euo pipefail

# === Home Assistant Force Pull & Local Backup ===
# Repo: schultz-it/ju7Hy6f6

HA_CONFIG_DIR=${HA_CONFIG_DIR:-/config}
GIT_DEFAULT_BRANCH=${GIT_DEFAULT_BRANCH:-main}
GIT_REMOTE=${GIT_REMOTE:-git@github.com:schultz-it/ju7Hy6f6.git}
BACKUP_BRANCH=Backup_Locale
LOG_FILE=${LOG_FILE:-${HA_CONFIG_DIR}/git_log.txt}

log() {
  printf "[%(%Y-%m-%d %H:%M:%S)T] %s\n" -1 "$@" | tee -a "$LOG_FILE"
}

cd "$HA_CONFIG_DIR"

# Inizializza repo se necessario
if [ ! -d .git ]; then
  log "Initializing git repo in $HA_CONFIG_DIR"
  git init | tee -a "$LOG_FILE"
  git remote add origin "$GIT_REMOTE" 2>/dev/null || true
  git checkout -B "$GIT_DEFAULT_BRANCH" | tee -a "$LOG_FILE" || true
fi

# Se ci sono modifiche locali, salvale su Backup_Locale
if [ -n "$(git status --porcelain)" ]; then
  log "Backup delle modifiche locali sulla branch $BACKUP_BRANCH"
  git checkout -B "$BACKUP_BRANCH"
  git add .
  git commit -m "Automatic Local Backup before force pull" | tee -a "$LOG_FILE"
  git push origin "$BACKUP_BRANCH" | tee -a "$LOG_FILE"
fi

# Torna sulla branch principale
git checkout "$GIT_DEFAULT_BRANCH"

# Scarica aggiornamenti da remoto e sovrascrivi tutto
log "Fetching remote changes"
git fetch origin "$GIT_DEFAULT_BRANCH" | tee -a "$LOG_FILE"

log "Resetting local branch to remote (OVERRIDE LOCAL CHANGES!)"
git reset --hard origin/"$GIT_DEFAULT_BRANCH" | tee -a "$LOG_FILE"

log "Operation complete: repository locale aggiornato, backup disponibile sulla branch $BACKUP_BRANCH."
