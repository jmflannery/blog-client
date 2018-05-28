const getPosts = state => state.posts.all;

const getPostBySlug = (state, slug) => state.posts.all.find(post => post.slug === slug);

const getSelectedPost = (state) => state.posts.all.find(post => post.slug === state.posts.selected);

export {
  getPosts,
  getPostBySlug,
  getSelectedPost
};
