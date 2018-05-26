import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from './configure-store';
import Posts from './components/posts/posts';
import SignIn from './components/sign-in/sign-in';
import Header from './Header';
import Auth from './components/admin/auth/auth';
import NewPost from './components/admin/posts/new/new-post';
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
              <Route exact path="/blog" component={Posts} />
              <Route exact path="/blog/posts" component={Posts} />
              <Route exact path="/blog/sign_in" component={SignIn} />
              <Route path="/blog/admin" render={() => (
                <Auth>
                  <Route exact path="/blog/admin" component={Posts} />
                  <Route exact path="/blog/admin/posts" component={Posts} />
                  <Route path="/blog/admin/posts/new" component={NewPost} />
                </Auth>
              )} />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
};

export default App;
