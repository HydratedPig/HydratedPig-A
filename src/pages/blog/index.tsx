import React from 'react';
import { useParams } from 'react-router-dom';
import BlogContext from '@/blogs';
import Markdown from '@/components/markdown';

const Blog = (): React.ReactElement => {
  const blogs = React.useContext(BlogContext);
  const params: { id: string } = useParams();
  return (
    <div>
      <Markdown value={blogs.getFile(params.id).content} />
    </div>
  );
};

export default Blog;
