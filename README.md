# highlightjs-heex

[highlight.js](https://highlightjs.org/) grammar for **HEEx** (HTML+Embedded Elixir) templates, used in [Phoenix LiveView](https://hexdocs.pm/phoenix_live_view).

Provides combined syntax highlighting for HTML structure and embedded Elixir expressions — EEx tags (`<%= %>`, `<% %>`), HEEx comments (`<%!-- --%>`), and curly-brace attribute expressions (`{@var}`, `{expr}`).

## Install

```bash
npm install highlightjs-heex highlight.js
```

## Usage

### Node.js / bundlers

```javascript
import hljs from 'highlight.js';
import registerHeex from 'highlightjs-heex';

registerHeex(hljs);

hljs.highlight('<div class={@class}><%= @name %></div>', { language: 'heex' });
```

Or register the grammar directly:

```javascript
import hljs from 'highlight.js';
import { heex } from 'highlightjs-heex';

hljs.registerLanguage('heex', heex);
```

### Browser / CDN

```html
<script src="path/to/highlight.min.js"></script>
<script src="path/to/heex.min.js"></script>
<script>
  hljs.registerLanguage('heex', hljsDefineHeex);
  hljs.highlightAll();
</script>
```

## What gets highlighted

| Syntax | Example | Highlighting |
|--------|---------|-------------|
| HTML tags | `<div class="x">` | XML grammar |
| EEx output | `<%= @name %>` | Elixir grammar |
| EEx exec | `<% if @show do %>` | Elixir grammar |
| HEEx comments | `<%!-- note --%>` | Comment style |
| EEx comments | `<%# note %>` | Comment style |
| Attribute expressions | `{@class}`, `{["a", @b]}` | Elixir grammar |

## Aliases

The grammar registers `heex` and `leex` (for legacy LiveView `.leex` templates).

## Requirements

- highlight.js >= 11.0.0
- Built-in `xml` and `elixir` grammars (included in highlight.js by default)

## License

MIT
