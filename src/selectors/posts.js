const getPosts = state => state.posts.all;

const getPostBySlug = (state, slug) => state.posts.all.find(post => post.slug === slug);

const getSelectedPost = (state) => state.posts.all.find(post => post.id === state.posts.selected);

const getPreviousPost = (state, slug) => {
  let index = state.posts.all.findIndex(post => post.slug === slug);
  if (index > 0) {
    return state.posts.all[index - 1];
  }
  return null;
};

const getNextPost = (state, slug) => {
  let index = state.posts.all.findIndex(post => post.slug === slug);
  if (index < state.posts.all.length - 1) {
    return state.posts.all[index + 1];
  }
  return null;
};

export {
  getPosts,
  getPostBySlug,
  getSelectedPost,
  getPreviousPost,
  getNextPost,
};
