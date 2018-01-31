import { isEmpty } from 'lodash';


export const selectLinkPaths = state => {
  const links = [];

  Object.keys(state.search).forEach(key => {
    if (!isEmpty(state.search[key])) {
      links.push(key);
    }
  });

  if (isEmpty(links)) {
    return [];
  }

  links.unshift('results');

  return links.map(link => '/search/' + link);
};

export const selectLinkHeaders = state => {
  const headers = [];

  Object.keys(state.search).forEach(key => {
    if (!isEmpty(state.search[key])) {
      headers.push(key);
    }
  });

  if (isEmpty(headers)) {
    return [];
  }

  headers.unshift('TOP RESULTS');

  return headers.map(header => header.toUpperCase());
};

export const foundResults = (state) => {
  let foundResults = false;

  for (let key in state.search) {
    if (!isEmpty(state.search[key])) foundResults = true;
  }

  return foundResults;
};
