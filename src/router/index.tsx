import React, { Suspense, lazy } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ScrollToTop from '@/components/scrollToTop';
import Loading from '@/components/loading';
import Exception from '@/pages/exception';

const componentMap = {
  homepage: lazy((): LazyImportType => import('@/pages/homepage')),
  blog: lazy((): LazyImportType => import('@/pages/blog')),
};

// TODO 先将就着，后面改成配置式的路由
const Router = (props: BasicProps): React.ReactElement => {
  console.log(props);
  return (
    <Suspense fallback={<Loading />}>
      <ScrollToTop />
      <Switch>
        <Route path="/homepage" strict exact>
          <componentMap.homepage />
        </Route>
        <Route path="/blog/:id" strict exact>
          <componentMap.blog />
        </Route>
        <Route path="/" strict exact>
          <Redirect to="/homepage" />
        </Route>
        <Route path="/*" render={() => <Exception type="404" />} />
      </Switch>
    </Suspense>
  );
};

export default Router;
