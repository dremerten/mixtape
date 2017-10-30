import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout } from './actions/session_actions';
import { fetchPlaylists, fetchPlaylist } from './actions/playlist_actions';
import { fetchTracks, fetchTrack } from './actions/track_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    // delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TEST FUNCTIONS
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchPlaylist = fetchPlaylist;
  window.fetchPlaylists = fetchPlaylists;
  window.fetchTracks = fetchTracks;
  window.fetchTrack = fetchTrack;
  // TEST FUNCTIONS

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
})
