import React from 'react';
import { Link } from 'react-router-dom';

import { useClassNames } from '@/utils/hooks';

import './index.less';

interface LayoutProps extends BasicProps {
  headers: Array<{ title: string, to: string, id: string }>
}

const Layout = (props: LayoutProps): React.ReactElement => {
  const { children, headers, className } = props;
  const classNames = useClassNames(
    prefixCls => `${prefixCls}-layout`,
    className,
  );
  return (
    <div className={classNames}>
      <header>
        {
          headers.map(header => (
            <Link to={header.to} key={header.id}>{header.title}</Link>
          ))
        }
      </header>
      <main className="main">
        <section>
          { children }
        </section>
        <footer>这是footer</footer>
      </main>
    </div>
  );
};

export default Layout;
