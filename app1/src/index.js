// if we import bootstrap everything works
// import('./bootstrap');

// if we do the same as in bootstrap here - it doesn't work, also "shared" deps are set to be eager
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
