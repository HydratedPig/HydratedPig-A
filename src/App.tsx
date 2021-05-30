import React, { useState } from 'react';
import logo from '@/assets/logo.svg';
import '@/App.less';
import Loading from '@/components/loading';

function App(): React.ReactElement {
  const [ count, setCount ] = useState(0);

  return (
    <div className="App">
      <Loading size="large">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <button onClick={() => setCount(c => c + 1)} type="button">
              count is:
              {' '}
              {count}
            </button>
          </p>
          <p>
            Edit
            {' '}
            <code>App.tsx</code>
            {' '}
            and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </Loading>
    </div>
  );
}

export default App;
