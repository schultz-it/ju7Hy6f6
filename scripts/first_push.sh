#!/usr/bin/env bash
set -euo pipefail
# One-time helper to do the first authenticated push to your repo schultz-it/ju7Hy6f6.
# Choose ONE method below and run this from inside /config.

: "${HA_CONFIG_DIR:=/config}"
: "${GIT_DEFAULT_BRANCH:=main}"
cd "${HA_CONFIG_DIR}"

if ! git remote | grep -qx origin; then
  # METHOD A: SSH deploy key (recommended). Ensure /config/.ssh has a key with access.
  git remote add origin git@github.com:schultz-it/ju7Hy6f6.git
  # METHOD B: HTTPS + PAT (uncomment next line and comment SSH line above).
  # git remote add origin https://TOKEN@github.com/schultz-it/ju7Hy6f6.git
fi

git fetch origin || true
git checkout -B "${GIT_DEFAULT_BRANCH}"
git push -u origin "${GIT_DEFAULT_BRANCH}"
echo "Origin set to: $(git remote get-url origin)"
