import React from 'react';
import BlogContext from '@/blogs';
import { Link } from 'react-router-dom';

const Homepage = (): React.ReactElement => {
  const blogs = React.useContext(BlogContext);
  return (
    <div>
      {
        blogs.files.map(file => (
          <Link to={`/blog/${file.id}`} key={file.id}>
            <h1>{file.title}</h1>
            <span>{file.createdAt}</span>
            <span>{file.modifiedAt}</span>
          </Link>
        ))
      }
    </div>
  );
};

export default Homepage;
