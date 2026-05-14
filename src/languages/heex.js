/*
 * HEEx (HTML+Embedded Elixir) grammar for highlight.js.
 *
 * Combines XML (HTML) as the base language with Elixir for embedded
 * expressions: EEx tags (<%= %>, <% %>), HEEx comments (<%!-- --%>),
 * and curly-brace attribute expressions ({@var}, {expr}).
 *
 * Requires: xml.js, elixir.js
 * Website: https://hexdocs.pm/phoenix_live_view/Phoenix.Component.html
 * Category: template
 */

export default function heex(hljs) {
  return {
    name: 'HEEx',
    aliases: ['heex', 'leex'],
    subLanguage: 'xml',
    contains: [
      hljs.COMMENT('<%!--', '--%>'),
      hljs.COMMENT('<%#', '%>'),
      {
        begin: '<%[=]?',
        end: '%>',
        subLanguage: 'elixir',
        excludeBegin: true,
        excludeEnd: true
      },
      {
        begin: /\{/,
        end: /\}/,
        subLanguage: 'elixir',
        excludeBegin: true,
        excludeEnd: true
      }
    ]
  };
}
