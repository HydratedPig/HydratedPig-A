import { Plugin } from 'vite';
import { TransformResult } from 'rollup';

function mdTransform(code: string, id: string): TransformResult {
  if (!id.endsWith('.md')) return null;
  const res = {
    code,
  };
  res.code = res.code.replace(/\$\\triangleright\$/g, '▹');

  return res;
}

export const plugin = (): Plugin => ({
  name: 'vite-plugin-owner-markdown',
  enforce: 'pre',
  transform: (code, id) => {
    const res = mdTransform(code, id);
    return res;
  },
});

export default plugin;
exports.default = plugin;
