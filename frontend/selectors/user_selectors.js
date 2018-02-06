export const followsCurrentUser = (user, state) => {
  return user &&
      user.followees &&
      user.followees.includes(state.session.currentUser.id);
};
