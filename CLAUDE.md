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
gh release create vX.Y.Z --generate-notes   # triggers CI → npm publish
```

The publish workflow triggers on `release: published` (not tag push). Creating the GitHub release is what kicks off the publish. CI runs tests then publishes to npm.

<important if="you are modifying the publish workflow">

The publish workflow **must** use Node 24+ (npm 11+). npm 10 (Node 22) does not handle the OIDC token exchange for Trusted Publishers. This was the root cause of repeated 404 errors on earlier attempts.
</important>

<important if="you are updating the grammar">

This grammar is also inlined in two other repos that must stay in sync:

- `crit/frontend/highlight-heex.js` (IIFE, concatenated into highlight.min.js via copy-deps.js)
- `crit-web/assets/js/highlight-heex.js` (ESM, imported in document-renderer.js)

When changing the grammar here, port the change to both.
</important>
