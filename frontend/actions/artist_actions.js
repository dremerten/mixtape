import * as ArtistAPIUtil from '../util/artist_api_util';

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const START_LOADING_ARTIST = 'START_LOADING_ARTIST';

export const startLoadingArtist = () => ({
  type: START_LOADING_ARTIST
});

export const receiveArtist = data => {
  return {
    type: RECEIVE_ARTIST, data
  };
};

export const fetchArtist = id => dispatch => {
  dispatch(startLoadingArtist());
  return ArtistAPIUtil.fetchArtist(id).then(data => {
    dispatch(receiveArtist(data));
  });
};
