import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from './configure-store';
import Home from './components/home/home';
import SignIn from './components/sign-in/sign-in';
import Header from './Header';
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
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
};

export default App;
