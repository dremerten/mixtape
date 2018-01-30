import { isEmpty } from 'lodash';


export const selectLinkPaths = state => {
  const links = [];

  Object.keys(state.search).forEach(key => {
    if (!isEmpty(state.search[key])) {
      links.push(key);
    }
  });
  debugger
  return links.map(link => '/search/' + link);
};

export const selectLinkHeaders = state => {
  const headers = [];

  Object.keys(state.search).forEach(key => {
    if (!isEmpty(state.search[key])) {
      headers.push(key);
    }
  });

  return headers.map(header => header.toUpperCase());
};
