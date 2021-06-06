import { Plugin } from 'vite';
import { TransformResult } from 'rollup';

function mdTransform(code: string, id: string): TransformResult {
  if (!id.endsWith('.md')) return null;
  const res = {
    code,
  };
  res.code = `
    'use strict';
    const html = ${JSON.stringify(res.code.replace(/\$\\triangleright\$/g, '▹'))};
    export default html;
  `;

  return res;
}

export const plugin = (): Plugin => ({
  name: 'vite-plugin-markdown-loader',
  enforce: 'pre',
  transform: (code, id) => {
    const res = mdTransform(code, id);
    return res;
  },
});

export default plugin;
exports.default = plugin;
