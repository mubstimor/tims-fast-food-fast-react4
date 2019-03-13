import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import CustomerHome from './components/customer/CustomerHome';
import OrderHistory from './components/customer/OrderHistory';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path="/" component={Login} />
            <Route exact path="/user/customer" component={CustomerHome} />
            <Route
              exact
              path="/user/customer/history"
              component={OrderHistory}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
