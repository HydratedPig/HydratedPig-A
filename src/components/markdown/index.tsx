/* eslint-disable react/no-danger */
import React from 'react';
import MarkdownIt from 'markdown-it';
import { useClassNames } from '@/utils/hooks';

import './index.less';

interface MarkdownProps extends BasicProps{
  value?: string,
  options?: markdownit.Options
}

const defaultConfig: markdownit.Options = {
  html: true,
  xhtmlOut: true,
  breaks: true,
  langPrefix: 'language-',
  linkify: true,
  typographer: true,
  quotes: '“”‘’',
};

function Markdown(props: MarkdownProps): React.ReactElement {
  const { options, value, className } = props;
  const md = new MarkdownIt({
    ...defaultConfig,
    ...options,
  });

  const maskClassName = useClassNames(
    prefixCls => ([ `${prefixCls}-markdown` ]),
    className,
  );

  return (
    <div dangerouslySetInnerHTML={{ __html: md.render(value || '') }} className={maskClassName} />
  );
}

export default Markdown;
