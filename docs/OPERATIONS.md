# Operations

## Run locally

No install is required.

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

If port `4173` is already in use, choose another port:

```bash
python3 -m http.server 8788 --bind 127.0.0.1
```

## Validate before handoff

Recommended checks:

```bash
git status --short --ignored
git diff --check
curl -I --max-time 5 http://127.0.0.1:8788/
```

For product-level regression coverage, use
[Test scenarios](TEST_SCENARIOS.md).

Syntax-check JavaScript on macOS without Node:

```bash
osascript -l JavaScript -e 'ObjC.import("Foundation"); var s=$.NSString.stringWithContentsOfFileEncodingError("app.js", $.NSUTF8StringEncoding, null).js; new Function(s); "app.js syntax OK"'
```

Static asset check:

```bash
python3 - <<'PY'
from html.parser import HTMLParser
from pathlib import Path

class Parser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.external = []
        self.assets = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.append(attrs["id"])
        for key in ("src", "href"):
            value = attrs.get(key, "")
            if value.startswith(("http://", "https://")):
                self.external.append(value)
            elif tag in {"script", "link"} and value and not value.startswith("#"):
                self.assets.append(value)

parser = Parser()
parser.feed(Path("index.html").read_text())
dupes = sorted({item for item in parser.ids if parser.ids.count(item) > 1})
print("duplicate ids:", dupes or "none")
print("external assets:", parser.external or "none")
for asset in parser.assets:
    if asset.endswith(".css") or asset.endswith(".js"):
        print(asset, "exists" if Path(asset).exists() else "MISSING")
PY
```

## Demo script

1. Parent view: ask `Can Maya come in with a fever?`
2. Open the Health & wellness source chip.
3. Open `Why this answer?` to inspect the simulated AI trace.
4. Ask `What activities are planned today?`
5. Confirm the assistant answers from Juniper Lane's daily update.
6. Ask `Can Maya join soccer enrichment?`
7. Confirm the assistant defers because the question asks about one child's
   participation.
8. Ask `When will my kid learn to read?`
9. Confirm the assistant defers to classroom staff because the question depends
   on child-specific context.
10. Ask `Can you give Maya medicine?`
11. Confirm the assistant escalates instead of deciding dosage.
12. Ask `Do you offer weekend care?`
13. Send the question to Juniper Lane staff.
14. Staff view: inspect the conversation, assignment, AI trace, and
    knowledge-gap queue.
15. Click `Draft source from question`.
16. Publish the prefilled weekend-care source.
17. Confirm the original conversation remains findable under the `Closed`
    filter and from the linked source.
18. Parent view: ask about weekend care again and confirm the new source-backed
    answer appears.

## Current deployment

This repo is static and is currently hosted from the repository root on GitHub
Pages.

- Hosted prototype:
  `https://algojutsu.github.io/brightwheel-frontdesk-prototype/`
- Public repository:
  `https://github.com/algojutsu/brightwheel-frontdesk-prototype`

If the repository is moved or recreated, host from `main` → `/ (root)` because
`index.html`, `styles.css`, and `app.js` live at the app root.

## Pre-public checklist

- `git status --short --ignored` has no untracked publishable files.
- Ignored local files such as `.swp` are not staged.
- No real personal data appears in seed data or docs.
- No API keys, tokens, secrets, or credentials are present.
- `index.html` references only local runtime assets.
- README demo script matches current behavior.
