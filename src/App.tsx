import React, { useState } from 'react';
import logo from '@/assets/logo.svg';
import '@/App.less';
import Loading from '@/components/loading';
import Resume from '@/pages/resume';

function App(): React.ReactElement {
  const [ loading, setLoading ] = useState(true);
  setTimeout(() => setLoading(false), 2000);
  return (
    <Loading size="large" loading={loading}>
      {
        loading ? (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Hello Vite + React!</p>
          </header>
        ) : <Resume />
      }
    </Loading>
  );
}

export default App;
