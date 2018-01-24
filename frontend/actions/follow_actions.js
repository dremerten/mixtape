import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS';

export const receiveFollow = data => ({
  type: RECEIVE_FOLLOW, data
});

export const removeFollow = data => ({
  type: REMOVE_FOLLOW, data
});

export const receiveFollowErrors = errors => ({
  type: RECEIVE_FOLLOW_ERRORS, errors
});

export const follow = (type, id) => dispatch => {
  return FollowAPIUtil.follow(type, id).then((response) => {
    return dispatch(receiveFollow(response));
  }, (err) => {
    return dispatch(receiveFollowErrors(err.responseJSON));
  });
};

export const unfollow = (type, id) => dispatch => {
  return FollowAPIUtil.unfollow(type, id).then((response) => {
    return dispatch(removeFollow(response));
  }, (err) => {
    return dispatch(receiveFollowErrors(err.responseJSON));
  });
};

export const toggleFollow = (type, id) => (dispatch, getState) => {
  const state = getState();
  debugger
  const followState = state.session.currentUser.followIds[`${type}s`].includes(id);

  if (followState) {
    debugger
    dispatch(unfollow(type, id));
  } else {
    dispatch(follow(type, id));
  }
};
