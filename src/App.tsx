import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '@/router';
import Layout from '@/components/layout';

const headers = [
  { title: '主页', to: '/homepage', id: 'homepage' },
  { title: '博客', to: '/blog', id: 'blog' },
];

function App(): React.ReactElement {
  return (
    <BrowserRouter basename="/">
      <Layout headers={headers}>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
