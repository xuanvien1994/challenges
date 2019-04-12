import React, { Component } from 'react';
import Home from './containers/home';
import {Route, Switch, withRouter} from 'react-router-dom';
import Layout from './components/Layout/layout';

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    );

    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
};

export default withRouter(App);