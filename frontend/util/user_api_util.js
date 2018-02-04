export const fetchUser = userId => {
  return $.ajax({
    url: `api/users/${userId}`,
    method: 'GET'
  });
};

export const fetchUsers = userId => {
  return $.ajax({
    url: `users/${userId}/follows/users`
  });
};
