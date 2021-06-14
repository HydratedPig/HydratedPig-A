import React from 'react';
import { Link } from 'react-router-dom';
import CenterContainer from '@/components/centerContainer';

const NotFound = (): React.ReactElement => (
  <CenterContainer>
    <h1>404</h1>
    <Link to="/">返回首页</Link>
  </CenterContainer>
);

export default NotFound;
