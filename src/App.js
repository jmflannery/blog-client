import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from './configure-store';
import Blog from './components/blog/blog';
import Posts from './components/posts/posts';
import SignIn from './components/sign-in/sign-in';
import Header from './components/header/header';
import NewPost from './components/posts/new/new-post';
import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Blog>
            <Header />
            <div className="blog-content">
              <Route exact path="/blog/sign-in" component={SignIn} />
              <Route exact  path="/blog/new-post" component={NewPost} />
              <Route path="/blog/posts" component={Posts} />
            </div>
          </Blog>
        </Router>
      </Provider>
    );
  }
};

export default App;
