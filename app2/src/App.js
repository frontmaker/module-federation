import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

export function App2(props) {
  return (
    <div>
      <div className="app-2-contaier">
        <Link to={`${props.baseUrl}/test`}>Test page of app2</Link>

        <Switch>
          <Route path={`${props.baseUrl}/test`}>
            <Test />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

const Test = () => {
  return <div>Test page of App2</div>;
};

export default App2;
