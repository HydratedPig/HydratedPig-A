import classNames from 'classnames';
import React from 'react';

import ConfigContext from '@/components/context';
import logo from '@/assets/logo.svg';

import './index.less';

interface LoadingProps extends BasicProps {
  size?: 'small' | 'default' | 'large',
  loading?: boolean
}

export function Mask(props: BasicProps): React.ReactElement {
  const { className, children } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls();

  const maskClassName = classNames(
    [ `${prefixCls}-mask` ],
    className,
  );
  return (
    <div className={maskClassName}>
      { children }
    </div>
  );
}

function Loading(props: LoadingProps): React.ReactElement {
  const { className, size = 'default', children, loading = true } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls();

  const loadingClassName = classNames(
    [ `${prefixCls}-loading`, `${prefixCls}-loading-${size}` ],
    className,
  );

  return (
    <>
      {
        loading ? (
          <div className={loadingClassName}>
            <img src={logo} alt="logo" />
            { children }
            <Mask />
          </div>
        ) : children
      }
    </>
  );
}

export default Loading;
