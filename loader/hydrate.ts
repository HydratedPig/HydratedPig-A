import { Plugin } from 'vite';
import { TransformResult } from 'rollup';
import fs from 'fs';
import path from 'path';

interface HydrateResult {
  order?: number,
  title?: string,
  filename: string,
  modifiedAt: Date,
  createdAt: Date,
  content: string,
}

function trimStr(value?: string): string {
  return value && value.trim();
}

function getConfigs(regResult: RegExpExecArray): {[key: string]: string | undefined} {
  const configStr = regResult[1];
  const map = configStr
    .split('\n')
    .filter(str => str.trim() !== '')
    .reduce((res, arr) => {
      const k = trimStr(arr[0]);
      if (k) {
        res[k] = trimStr(arr[1]);
      }
      return res;
    }, {});
  return map;
}

class Hydrate {
  files: Array<string>;

  fileDir: string;

  response: Array<HydrateResult>;

  exportValue: string;

  constructor(files: string[], fileDir: string) {
    this.files = files;
    this.fileDir = fileDir;
  }

  static pipeline(filePath: string, filename: string): HydrateResult {
    if (!filename.endsWith('.md')) return null;
    const rawContent = fs.readFileSync(filePath).toString().trim();
    const configReg = /^---([^---]*)---/s;
    const regResult: RegExpExecArray = configReg.exec(rawContent);

    const config = regResult ? getConfigs(regResult) : {};

    const content = rawContent.replace(configReg, '').trim();

    const stat = fs.statSync(filePath);

    return {
      order: config.order ? +config.order : undefined,
      title: config.title,
      filename,
      modifiedAt: stat.mtime,
      createdAt: stat.birthtime,
      content: JSON.stringify(content),
    };
  }

  initial() {
    this.response = this.files.map(filename => {
      const filePath = path.join(this.fileDir, filename);
      const result = Hydrate.pipeline(filePath, filename);
      return result;
    }).sort((a, b) => a.order - b.order);

    this.exportValue = `
      function getResult() {
        return ${JSON.stringify(this.response)}
      }
      export default getResult();
    `;
  }
}

function transformer(code: string, id: string): TransformResult {
  if (!id.endsWith('.hydrate')) return null;
  const fileDir = path.dirname(id);
  const filename = path.basename(id);
  const files = fs.readdirSync(fileDir).filter(name => name !== filename);
  const hydrate = new Hydrate(files, fileDir);
  hydrate.initial();

  return {
    code: hydrate.exportValue,
  };
}

export const plugin = (/* options: PluginOptions = {} */): Plugin => ({
  name: 'vite-plugin-hydrate',
  transform: (code, id) => transformer(code, id),
});

export default plugin;
