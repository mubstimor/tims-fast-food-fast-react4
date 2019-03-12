import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import CustomerHome from './components/customer/CustomerHome';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/" component={Login} />
            <Route path="/user/customer" component={CustomerHome} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
