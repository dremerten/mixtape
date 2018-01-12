import * as ArtistAPIUtil from '../util/artist_api_util';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const START_LOADING_ARTIST = 'START_LOADING_ARTIST';
export const START_LOADING_ARTISTS = 'START_LOADING_ARTISTS';

export const startLoadingArtist = () => ({
  type: START_LOADING_ARTIST
});

export const startLoadingArtists = () => ({
  type: START_LOADING_ARTISTS
});

export const receiveArtist = data => {
  return {
    type: RECEIVE_ARTIST, data
  };
};

export const receiveArtists = artists => {
  return {
    type: RECEIVE_ARTISTS, artists
  };
};

export const fetchArtist = id => dispatch => {
  dispatch(startLoadingArtist());
  return ArtistAPIUtil.fetchArtist(id).then(data => {
    dispatch(receiveArtist(data));
  });
};

export const fetchUserArtists = () => dispatch => {
  dispatch(startLoadingArtists());
  ArtistAPIUtil.fetchUserArtists().then(artists => (
    dispatch(receiveArtists(artists))
  ));
};
