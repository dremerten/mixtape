import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const START_LOADING_SINGLE_USER = 'START_LOADING_SINGLE_USER';

export const receiveUser = data => ({
  type: RECEIVE_USER,
  user: data.user,
  users: data.users,
  playlists: data.playlists
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS, users
});

export const recieveUserErros = errors => ({
  type: RECEIVE_USER_ERRORS, errors
});

export const startLoadingSingleUser = () => ({
  type: START_LOADING_SINGLE_USER
});

export const fetchUser = userId => dispatch => {
  dispatch(startLoadingSingleUser());
  return UserAPIUtil.fetchUser(userId).then((user) => (
    dispatch(receiveUser(user))
  ), (err) => (
    dispatch(receiveUserErrors(err.responseJSON))
  ));
};

export const fetchUsers = userId => dispatch => (
  UserAPIUtil.fetchUsers(userId).then(users => (
    dispatch(receiveUsers(users))
  ), (err) => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);
