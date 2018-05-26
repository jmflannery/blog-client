const getToken = (state) => state.sessions.token;

const getCurrentUser = (state) => state.sessions.currentUser;

export {
  getToken,
  getCurrentUser
};
