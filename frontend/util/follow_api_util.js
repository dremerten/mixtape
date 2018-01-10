export const follow = (type, id) => {
  return $.ajax({
    method: 'POST',
    url: `${type}s/${id}/follow`
  });
};

export const unfollow = (type, id) => {
  return $.ajax({
    method: 'DELETE',
    url: `${type}s/${id}/follow`
  });
};
