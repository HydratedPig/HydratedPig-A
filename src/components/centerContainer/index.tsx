import React from 'react';
import { useClassNames } from '@/utils/hooks';
import './index.less';

const CenterContainer = (props: BasicProps): React.ReactElement => {
  const { children, className } = props;

  const centerContainerClassName = useClassNames(
    prefixCls => `${prefixCls}-center-container`,
    className,
  );

  return (
    <div className={centerContainerClassName}>
      { children }
    </div>
  );
};

export default CenterContainer;
