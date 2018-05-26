import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from './configure-store';
import Home from './components/home/home';
import SignIn from './components/sign-in/sign-in';
import Header from './Header';
import Auth from './components/admin/auth/auth';
import Admin from './components/admin/admin';
// import logo from './logo.svg';
import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Router>
            <div>
              <Route exact path="/blog" component={Home} />
              <Route exact path="/blog/sign_in" component={SignIn} />
              <Auth>
                <Route exact path="/blog/admin" component={Admin} />
              </Auth>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
};

export default App;
