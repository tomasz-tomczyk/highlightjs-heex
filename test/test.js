import hljs from 'highlight.js';
import registerHeex, { heex } from '../src/index.js';
import assert from 'node:assert';
import { describe, it } from 'node:test';

registerHeex(hljs);

describe('highlightjs-heex', () => {
  it('registers the language', () => {
    assert.ok(hljs.getLanguage('heex'));
  });

  it('registers aliases', () => {
    const result = hljs.highlight('<div></div>', { language: 'heex' });
    assert.ok(result.value.includes('hljs-'));
  });

  it('highlights HTML tags', () => {
    const result = hljs.highlight('<div class="test">hello</div>', { language: 'heex' });
    assert.ok(result.value.includes('hljs-tag'));
    assert.ok(result.value.includes('hljs-name'));
  });

  it('highlights EEx output tags', () => {
    const result = hljs.highlight('<%= @name %>', { language: 'heex' });
    assert.ok(result.value.includes('language-elixir'));
  });

  it('highlights EEx exec tags', () => {
    const result = hljs.highlight('<% if @show do %>', { language: 'heex' });
    assert.ok(result.value.includes('language-elixir'));
  });

  it('highlights HEEx comments', () => {
    const result = hljs.highlight('<%!-- this is a comment --%>', { language: 'heex' });
    assert.ok(result.value.includes('hljs-comment'));
  });

  it('highlights EEx comments', () => {
    const result = hljs.highlight('<%# old style comment %>', { language: 'heex' });
    assert.ok(result.value.includes('hljs-comment'));
  });

  it('highlights curly-brace expressions', () => {
    const result = hljs.highlight('<div class={@class}></div>', { language: 'heex' });
    assert.ok(result.value.includes('language-elixir'));
  });

  it('highlights a full HEEx template', () => {
    const template = `<div class="container">
  <%!-- Navigation --%>
  <nav class={["nav", @active && "nav-active"]}>
    <%= for item <- @items do %>
      <.link navigate={~p"/items/\#{item.id}"}>
        <%= item.name %>
      </.link>
    <% end %>
  </nav>
</div>`;
    const result = hljs.highlight(template, { language: 'heex' });
    assert.ok(result.value.includes('hljs-comment'));
    assert.ok(result.value.includes('hljs-tag'));
    assert.ok(result.value.includes('language-elixir'));
  });

  it('exports the grammar function directly', () => {
    assert.strictEqual(typeof heex, 'function');
    const def = heex(hljs);
    assert.strictEqual(def.name, 'HEEx');
    assert.ok(def.contains.length >= 4);
  });
});
