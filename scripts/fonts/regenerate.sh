#!/usr/bin/env bash
# Re-download and re-subset the self-hosted webfonts.
# Requires: pip install "fonttools[woff]" brotli
set -euo pipefail
cd "$(dirname "$0")/../../public/fonts"   # write into the served font dir

RANGE="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+FEFF,U+FFFD"
NECO_FEATS='kern,liga,calt,onum,lnum,tnum,pnum,case'
MONO_FEATS='kern,liga'

FS=https://cdn.fontshare.com/wf
declare -A SRC=(
  [neco-variable]="$FS/W4GWWPAVCDYKM7JM2OHTUVUMZRSLXEYU/SOFZUBGETCOJFNGBADIRW6DMAGMZO6QP/4PASRLMP2IF6VCYT6YJSVJGFWCDQD54A.woff2"
  [neco-variable-italic]="$FS/L4QINZAS2TTDK4ODBRB4RUDGPWFVEEX3/44DPILWQR3OOYLQYE6ABOUE5S423YPEH/FI7S6JRFCIQR52KUY6YG6R2SHB3XRJKH.woff2"
  [array-700]="$FS/UPIFVAOR6LZHAYRMF2C77WE3FN5BLNEC/INIDOMS2AGMFQXDWKOC6LOTPXKPZEIHL/2RWR7WKM4ZCDU656OKUXMQXLJH4H3EJD.woff2"
  [ibm-plex-mono-400]="https://fonts.gstatic.com/s/ibmplexmono/v20/-F63fjptAgt5VM-kVkqdyU8n1i8q1w.woff2"
)

tmp=$(mktemp -d); trap 'rm -rf "$tmp"' EXIT
for name in "${!SRC[@]}"; do
  case "$name" in neco*) feats=$NECO_FEATS ;; *) feats=$MONO_FEATS ;; esac
  curl -fsSL --max-time 30 -o "$tmp/$name.woff2" "${SRC[$name]}"
  python3 -m fontTools.subset "$tmp/$name.woff2" \
    --unicodes="$RANGE" --flavor=woff2 --layout-features="$feats" \
    --output-file="$name.woff2"
  printf '%-30s %7d bytes\n' "$name.woff2" "$(wc -c <"$name.woff2")"
done

total=$(cat ./*.woff2 | wc -c)
printf '\nTOTAL %d bytes (%d KB) / 120 KB budget\n' "$total" "$((total/1024))"
[ "$total" -le 122880 ] || { echo "OVER BUDGET"; exit 1; }

python3 - <<'PY'
from fontTools.ttLib import TTFont
for f in ('neco-variable.woff2','neco-variable-italic.woff2'):
    t = TTFont(f)
    assert 'fvar' in t, f'{f}: variable axes lost in subsetting'
    print(f, 'axes OK', [(a.axisTag, int(a.minValue), int(a.maxValue)) for a in t['fvar'].axes])
PY
