import React from 'react';
import Markdown from '@/components/markdown';
import './index.less';
import html from './resume.md';

function Resume(): React.ReactElement {
  return <Markdown value={html} />;
}

export default Resume;
