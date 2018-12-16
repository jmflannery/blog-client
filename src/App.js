import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from './configure-store';
import Blog from './components/blog/blog';
import Posts from './components/posts/posts';
import SignIn from './components/sign-in/sign-in';
import Header from './components/header/header';
import NewPost from './components/posts/new/new-post';
import './reset.css';
import './App.css';

const store = configureStore();

const App = (props) => (
  <Provider store={store}>
    <Router>
      <Blog>
        <Header />
        <main>
          <Route exact path="/" component={Posts} />
          <Route path="/posts" component={Posts} />
          <Route path="/sign-in" component={SignIn} />
          <Route exact path="/new-post" component={NewPost} />
        </main>
      </Blog>
    </Router>
  </Provider>
);

export default App;
