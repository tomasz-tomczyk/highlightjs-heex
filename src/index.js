import heex from './languages/heex.js';

export default function registerHeex(hljs) {
  hljs.registerLanguage('heex', heex);
}

export { heex };
