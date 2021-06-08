import { Plugin } from 'vite';
import { TransformResult } from 'rollup';
import fs from 'fs';
import path from 'path';

interface HydrateResult {
  order?: number,
  title?: string,
  content: string,
}

function trimStr(value?: string): string {
  return (value || '').trim();
}

class Hydrate {
  files: Array<string>;

  fileDir: string;

  response: Array<HydrateResult>;

  constructor(files: string[], fileDir: string) {
    this.files = files;
    this.fileDir = fileDir;
  }

  static pipeline(filePath: string): HydrateResult {
    let content = fs.readFileSync(filePath).toString().trim();
    const configReg = /^---([^---]*)---/s;
    const regResult = configReg.exec(content);
    let order: number;
    let title: string;
    if (regResult) {
      const configs = regResult && regResult[1];
      const map = new Map(
        configs
          .split('\n')
          .map((config): [string, string] => {
            const sliceArr = config.split(/: */);
            return [ trimStr(sliceArr[0]), trimStr(sliceArr[1]) ];
          }),
      );
      order = +map.get('order');
      title = map.get('title');
    }

    content = content.replace(configReg, '').trim();
    return {
      order,
      title,
      content: JSON.stringify(content),
    };
  }

  initial() {
    this.response = this.files.map(filename => {
      const filePath = path.join(this.fileDir, filename);
      const result = Hydrate.pipeline(filePath);
      return result;
    }).sort((a, b) => a.order - b.order);
  }
}

function transformer(code: string, id: string): TransformResult {
  if (!id.endsWith('.hydrate')) return null;
  const fileDir = path.dirname(id);
  const filename = path.basename(id);
  const files = fs.readdirSync(fileDir).filter(name => name !== filename);
  const hydrate = new Hydrate(files, fileDir);
  hydrate.initial();
  const { response } = hydrate;

  const result = `
    function getResult() {
      return ${JSON.stringify(response)}
    }
    export default getResult();
  `;
  console.log(response);
  return {
    code: result,
  };
}

export const plugin = (/* options: PluginOptions = {} */): Plugin => ({
  name: 'vite-plugin-hydrate',
  transform: (code, id) => transformer(code, id),
});

export default plugin;
