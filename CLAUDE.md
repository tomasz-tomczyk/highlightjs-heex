# highlightjs-heex

highlight.js grammar for HEEx (HTML+Embedded Elixir) templates.

## Development

```bash
npm ci          # install deps
npm run build   # rollup → dist/ (CJS, ESM, IIFE)
npm test        # node:test runner
```

## Releasing

Publishing is automated via GitHub Actions + npm Trusted Publishers (OIDC, no secrets).

```bash
npm version patch   # or minor/major — bumps package.json, commits, creates vX.Y.Z tag
git push --follow-tags
```

CI runs tests, publishes to npm with provenance, and creates a GitHub Release.
