# Self-hosted fonts

The `.woff2` files live in `public/fonts/`. This README and the
regeneration script live here, outside `public/`, so Vite does not publish
them to `/fonts/` on the live site.

Four files, latin-subset, woff2. Total **102 KB**, against the 120 KB
budget in `docs/olamide_personal_brand_system_v0_2.md` section 15.

| File | Family | Role | Size |
| --- | --- | --- | --- |
| `neco-variable.woff2` | Neco | Display + body. Variable `wght 400-900`. | 37,664 B |
| `neco-variable-italic.woff2` | Neco Italic | Asides, braced words. Variable `wght 400-900`. | 38,376 B |
| `array-700.woff2` | Array | Wordmark only. Static 700. Unused until M2. | 17,044 B |
| `ibm-plex-mono-400.woff2` | IBM Plex Mono | Labels, eyebrows, coordinates. | 12,312 B |

An unused `@font-face` costs zero bytes, so declaring Array before the
wordmark exists does not spend budget. Browsers fetch a font file only
when a glyph actually needs it.

## Licences

-   **Neco** and **Array**: Indian Type Foundry via Fontshare, under the
    ITF Free Font License. Free for personal and commercial use, webfont
    use and subsetting included. <https://www.fontshare.com/licenses/itf-ffl>
-   **IBM Plex Mono**: SIL Open Font License 1.1.
    <https://github.com/IBM/plex>

Read the licence text yourself before any commercial redistribution. This
note is a pointer, not legal advice.

## Regenerating

The files here are **subset**. Do not overwrite them with raw downloads,
which are 210 KB and would blow the budget by 75%.

Requires `pip install "fonttools[woff]" brotli`, then:

```sh
./scripts/fonts/regenerate.sh
```

Source URLs are pinned inside that script. Fontshare CDN paths are content
hashed, so if one 404s, re-resolve it with:

```sh
curl -s "https://api.fontshare.com/v2/css?f%5B%5D=neco@1,2&display=swap"   # variable upright + italic
curl -s "https://api.fontshare.com/v2/css?f%5B%5D=array@700&display=swap"
```

## Subsetting decisions

-   **Unicode range:** the Google Fonts `latin` range, plus `U+2190-2193`
    for arrows. `U+00B0` (degree sign, needed for the Lagos coordinate
    label) falls inside `U+0000-00FF`.
-   **Features kept for Neco:** `kern,liga,calt,onum,lnum,tnum,pnum,case`.
    Old-style and tabular figures cost 4.4 KB and are worth it: old-style
    figures in a serif are a real editorial lever, and tabular figures
    matter wherever project metrics are set.
-   **Features kept for Array and Plex Mono:** `kern,liga` only.
-   **Dropped everywhere:** `aalt, smcp, sups, ordn, frac, locl, mark,
    salt, ccmp, dnom, numr`. Dropping unused features saved 42 KB, the
    single largest win in the pass. Small caps are unnecessary because
    labels use Plex Mono.
-   Variable `wght 400-900` axes are preserved on both Neco files.
    Verified after subsetting, since a careless subset silently flattens
    a variable font to static.
