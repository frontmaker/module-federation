import React, { Suspense } from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';

const RemoteApp2 = React.lazy(() => import('app2/App'));

export default function App() {
  const location = useLocation();

  console.log(location);

  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/inner">Inner</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/inner">
            <Inner />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function Home() {
  return <div>Home</div>;
}

function Inner() {
  return (
    <div>
      <p>App2</p>
      <hr />
      <Suspense fallback={'Loading App 2'}>
        <RemoteApp2 baseUrl="/inner" />
      </Suspense>
    </div>
  );
}
