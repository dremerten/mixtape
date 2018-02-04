import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUser = user => ({
  type: RECEIVE_USER, user
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS, users
});

export const recieveUserErros = errors => ({
  type: RECEIVE_USER_ERRORS, errors
});

export const fetchUser = userId => dispatch => (
  UserAPIUtil.fetchUser(userId).then((user) => (
    dispatch(receiveUser(user))
  ), (err) => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);

export const fetchUsers = userId => dispatch => (
  UserAPIUtil.fetchUsers(userId).then(users => (
    dispatch(receiveUsers(users))
  ), (err) => (
    dispatch(receiveUserErrors(err.responseJSON))
  ))
);
