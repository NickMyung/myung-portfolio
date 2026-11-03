# RSCH / MENU public comparison

The active options on main are RSCH and MENU. RSCH remains the default and
retains the full single-page portfolio. MENU provides focused pages. The
standalone V3 branch remains published, but is no longer a comparison option;
legacy `version=v3` requests fall back to RSCH.

## URLs and destinations

| Content | RSCH | MENU |
| --- | --- | --- |
| Overview | `/?version=rsch` | `/?version=menu` |
| Professional work | `/?version=rsch#projects` | `/work?version=menu` |
| Scientific contribution | `/?version=rsch#academic-service` | `/research?version=menu` |
| Personal projects | `/?version=rsch#personal-projects` | `/personal?version=menu` |
| Profile / experience | `/?version=rsch#about` | `/about?version=menu` |
| Contact | `/?version=rsch#contact` | `/contact?version=menu` |

Case URLs are shared and choose the presentation with the version parameter.
The switch maps a section to its corresponding page, retains valid case paths,
and supports browser history. Radio controls use the arrow keys and restore
focus after changing layouts. Every MENU internal link preserves the MENU query.
The standalone MENU branch uses the same routes without requiring the query or
showing a comparison bar.

## Sources and synchronization

The original RSCH components remain in `src/components`. MENU is an isolated,
generated source snapshot under `src/menu`, sourced from the committed
`myung-portafolio-menu` branch. Both read the single root `portfolio_data.json`.
The synchronization helper verifies editorial data equality before copying;
`src/menu/source-manifest.json` records the input commit and content hashes.
Do not edit generated source files directly. Hashes describe canonical Git source
text with LF line endings.

After committing changes on MENU, run from main:

```powershell
node scripts/sync-menu-snapshot.cjs myung-portafolio-menu
npm run build
```

`MenuEnvironment` provides the URL adapter and optional comparison control. MENU
itself has no dependency on the public selector. The public wrapper adds the
selector and a CSS offset for its extra header row. No iframe or second remote
site is needed for the published view.

## Checks

With the updated main build running:

```powershell
$env:PORTFOLIO_TEST_URL='http://127.0.0.1:3072'
npm run test:versions
$env:PORTFOLIO_TEST_QUERY='menu'
npm run test:menu
```

The MENU suite also runs directly against a standalone MENU server without
`PORTFOLIO_TEST_QUERY`. Browser checks cover 320, 390, 1024 and 1440 px, active
navigation, keyboard and Escape, work filters, legacy hashes, simulator opening,
version changes from interior pages, browser history and branch content parity.
