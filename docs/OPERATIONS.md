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
4. Ask `When will my kid learn to read?`
5. Confirm the assistant defers to classroom staff because the question depends
   on child-specific context.
6. Ask `Can you give Maya medicine?`
7. Confirm the assistant escalates instead of deciding dosage.
8. Ask `Do you offer weekend care?`
9. Send the question to Little Sprouts.
10. Staff view: inspect the conversation, assignment, AI trace, and
    knowledge-gap queue.
11. Click `Draft source from question`.
12. Publish the prefilled weekend-care source.
13. Confirm the original conversation remains findable under the `Closed`
    filter and from the linked source.
14. Parent view: ask about weekend care again and confirm the new source-backed
    answer appears.

## GitHub Pages deployment

This repo is static and can be hosted directly from the repository root.

Recommended flow after pushing to GitHub:

1. Open the GitHub repository.
2. Go to `Settings` → `Pages`.
3. Source: `Deploy from a branch`.
4. Branch: `main`.
5. Folder: `/ (root)`.
6. Save.

The deployed URL should follow:

```text
https://<github-username>.github.io/<repo-name>/
```

## Pre-public checklist

- `git status --short --ignored` has no untracked publishable files.
- Ignored local files such as `.swp` are not staged.
- No real personal data appears in seed data or docs.
- No API keys, tokens, secrets, or credentials are present.
- `index.html` references only local runtime assets.
- README demo script matches current behavior.
