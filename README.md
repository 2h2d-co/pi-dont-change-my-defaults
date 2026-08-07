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
extensions/pi-dont-change-my-defaults/index.ts
```

## Release staging

The GitHub Actions workflow stages npm releases when a `v*` tag is pushed. The tag must match the `package.json` version, point at a commit whose subject is `release: v<version>`, and be a lightweight tag. Create it with `git tag v<version>`; do not use `git tag -a`, `git tag -s`, `git tag -m`, or `cog bump --annotated`.
