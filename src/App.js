import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from './configure-store';
import Blog from './components/blog/blog';
import Posts from './components/posts/posts';
import SignIn from './components/sign-in/sign-in';
import Header from './components/header/header';
import NewPost from './components/posts/new/new-post';
import EditPost from './components/posts/edit/edit-post';
import Post from './components/posts/post/post';
import './reset.css';

const store = configureStore();

const App = (props) => (
  <Provider store={store}>
    <Router>
      <Blog>
        <Header />
        <Route path="/posts" component={Posts} />
        <main>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/new-post" component={NewPost} />
          <Route exact path="/posts/:slug" component={Post} />
          <Route path="/posts/:slug/edit" component={EditPost} />
        </main>
      </Blog>
    </Router>
  </Provider>
);

export default App;
