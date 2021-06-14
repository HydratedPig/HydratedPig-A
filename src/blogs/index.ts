import React from 'react';

import hydrate from './index.hydrate';

type BlogFiles = HydrateResult[];

interface HydrateResultExtend extends HydrateResult {
  index: number
}

type BlogFileMap = {
  [key: string]: HydrateResultExtend
};

class Blog {
  files: BlogFiles = hydrate;

  fileMap: BlogFileMap = hydrate.reduce((res: BlogFileMap, file, index) => {
    res[file.id] = {
      ...file,
      index,
    };
    return res;
  }, {});

  getFile = (id: string): HydrateResultExtend => this.fileMap[id];

  getPrev = (id: string): HydrateResultExtend => {
    const blog = this.fileMap[id];
    const index = blog.index - 1;
    const prevId = this.files[index === -1 ? this.files.length - 1 : index].id;
    return this.fileMap[prevId];
  };

  getNext = (id: string): HydrateResultExtend => {
    const blog = this.fileMap[id];
    const index = blog.index + 1;
    const nextId = this.files[index >= this.files.length ? 0 : index].id;
    return this.fileMap[nextId];
  };
}

const BlogContext = React.createContext(new Blog());

export default BlogContext;
