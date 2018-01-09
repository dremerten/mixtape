import * as ArtistAPIUtil from '../util/artist_api_util';

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

export const receiveArtist = data => ({
  type: RECEIVE_ARTIST, data
});

export const fetchArtist = id => dispatch => {
  return ArtistAPIUtil.fetchArtist(id).then(data => (
    dispatch(receiveArtist(data))
  ));
};
