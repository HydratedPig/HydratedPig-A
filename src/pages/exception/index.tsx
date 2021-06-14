import React from 'react';
import NotFound from './404';

const ExceptionMap = {
  404: NotFound,
  403: NotFound,
  500: NotFound,
};

interface ExceptionProps extends BasicProps {
  type?: '404' | '403' | '500'
}

const Exception = (props: ExceptionProps): React.ReactElement => {
  const { type = '404' } = props;
  const Component = ExceptionMap[type];
  return (
    <Component />
  );
};

export default Exception;
