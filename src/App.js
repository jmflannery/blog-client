import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from './configure-store';
import Home from './components/home/home';
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
            <Route exact path="/blog" component={Home} />
          </Router>
        </div>
      </Provider>
    );
  }
};

export default App;
