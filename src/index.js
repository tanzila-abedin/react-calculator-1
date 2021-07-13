import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import App from './components/App';
import Quotes from './components/Quotes';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={App} />
        <Route exact path="/quotes" component={Quotes} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorkerRegistration.register();
