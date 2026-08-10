# pi-dont-change-my-defaults

Prevent Pi from persisting model, provider, and thinking-level changes as defaults.

Selecting a model or thinking level still changes the current session. This extension only prevents
Pi from writing those choices back as defaults for future sessions. Other settings continue to
persist normally.

## Install

```bash
pi install npm:pi-dont-change-my-defaults
```

To try it for one invocation without installing it:

```bash
pi -e npm:pi-dont-change-my-defaults
```

## Development

```bash
npm install
npm run check
npm test
npm run pack:dry
```

The extension entrypoint is:

```txt
extensions/index.ts
```

## Release staging

1. Run `npm run release -- X.Y.Z` from a clean, synchronized `main`.
2. The command builds the exact package locally, records its SHA-256 in an SSH-signed release commit, proves a clean rebuild is reproducible, and creates a lightweight tag.
3. Inspect the result, then push atomically with `git push --atomic origin main vX.Y.Z`.
4. A read-only GitHub Actions job validates and packs the package. A separate GitHub-owned job verifies the signature and signed digest before attesting and staging that exact archive through npm trusted publishing.
5. Approve the staged package on npmjs.com, or with `npm stage approve <stage-id>`.

Stable releases use `latest`; prereleases derive their npm dist-tag from the first prerelease identifier.
