import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout } from './actions/session_actions';
import { fetchPlaylists, fetchPlaylist } from './actions/playlist_actions';
import { fetchTracks, fetchTrack, saveTrack, saveTrackToPlaylist, removeTrack } from './actions/track_actions';
import { fetchResults } from './actions/search_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser },
      entities: {
        playlists: {
          currentUser: window.userPlaylists,
          byId: {}
        }
      }
    };

    store = configureStore(preloadedState);

    // delete window.userPlaylists;
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TEST FUNCTIONS
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.saveTrack = saveTrack;
  window.removeTrack = removeTrack;
  window.saveTrackToPlaylist = saveTrackToPlaylist;
  // TEST FUNCTIONS

  const rootEl = document.getElementById('root');
  Modal.setAppElement('#root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
