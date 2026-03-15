#!/usr/bin/env bash
# Verify that src/ contains ONLY the files listed in src/vendor-manifest.txt
# (plus ui/, i18n/, styles/, and the entry-point files main.ts / css.d.ts / styles.css).
#
# Usage:  scripts/check-vendor.sh          — exits 0 if clean, 1 if stray files found
#         scripts/check-vendor.sh --fix    — also deletes stray files

set -euo pipefail
cd "$(git -C "$(dirname "$0")/.." rev-parse --show-toplevel)"

MANIFEST="src/vendor-manifest.txt"
if [[ ! -f "$MANIFEST" ]]; then
  echo "error: $MANIFEST not found" >&2
  exit 1
fi

# Build allowed-file set from manifest (strip comments and blanks)
allowed=$(grep -v '^\s*#' "$MANIFEST" | grep -v '^\s*$' | sort -u)

# Find all files outside the core UI directories
stray=()
while IFS= read -r f; do
  if ! echo "$allowed" | grep -qxF "$f"; then
    stray+=("$f")
  fi
done < <(find src -type f \
  -not -path 'src/ui/*' \
  -not -path 'src/i18n/*' \
  -not -path 'src/styles/*' \
  -not -name 'main.ts' \
  -not -name 'css.d.ts' \
  -not -name 'styles.css' \
  -not -name 'vendor-manifest.txt' \
  | sort)

if [[ ${#stray[@]} -eq 0 ]]; then
  echo "✓ vendor files match manifest ($(echo "$allowed" | wc -l | tr -d ' ') files)"
  exit 0
fi

echo "✗ ${#stray[@]} file(s) in src/ not listed in $MANIFEST:" >&2
printf '  %s\n' "${stray[@]}" >&2

if [[ "${1:-}" == "--fix" ]]; then
  for f in "${stray[@]}"; do
    rm -v "$f"
  done
  find src -type d -empty -delete
  echo "Cleaned up ${#stray[@]} stray file(s)."
fi

exit 1
