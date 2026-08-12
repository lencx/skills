#!/usr/bin/env bash

set -euo pipefail

script_dir="$(CDPATH= cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
repo_root="$(CDPATH= cd -- "${script_dir}/.." && pwd -P)"
output_path="${1:-${repo_root}/dist}"

command -v zip >/dev/null 2>&1 || {
  echo "error: zip is required" >&2
  exit 1
}

required_paths=(
  ".codex-plugin/plugin.json"
  "icon.svg"
  "skills"
  "LICENSE"
  "README.md"
)

for path in "${required_paths[@]}"; do
  if [[ ! -e "${repo_root}/${path}" ]]; then
    echo "error: missing ${path}" >&2
    exit 1
  fi
done

mkdir -p "${output_path}"
output_dir="$(CDPATH= cd -- "${output_path}" && pwd -P)"
archive_name="lencx-skills-codex.zip"
temp_dir="$(mktemp -d)"

cleanup() {
  if [[ -n "${temp_dir:-}" && -d "${temp_dir}" ]]; then
    rm -rf -- "${temp_dir}"
  fi
}
trap cleanup EXIT

(
  cd "${repo_root}"
  zip -qr "${temp_dir}/${archive_name}" \
    .codex-plugin \
    icon.svg \
    skills \
    LICENSE \
    README.md \
    -x "*/.DS_Store" "__MACOSX/*"
)

mv -f "${temp_dir}/${archive_name}" "${output_dir}/${archive_name}"
printf 'Created %s\n' "${output_dir}/${archive_name}"
