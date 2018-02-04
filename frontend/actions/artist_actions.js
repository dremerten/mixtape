import * as ArtistAPIUtil from '../util/artist_api_util';
import { playFullCollection } from './audio_actions';

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

export const receiveArtist = data => ({
  type: RECEIVE_ARTIST, data
});

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS, artists
});

export const fetchArtist = id => dispatch => {
  dispatch(startLoadingArtist());
  return ArtistAPIUtil.fetchArtist(id).then(data => {
    dispatch(receiveArtist(data));
    return data;
  });
};

export const fetchUserArtists = userId => dispatch => {
  dispatch(startLoadingArtists());
  return ArtistAPIUtil.fetchUserArtists(userId).then(artists => (
    dispatch(receiveArtists(artists))
  ));
};

export const playTracksForArtist = artistId => (dispatch, getState) => (
  dispatch(fetchArtist(artistId)).then(data => {
    dispatch(playFullCollection({
      context: `artists-${data.artist.id}`,
      currentTrack: data.artist.topTrackIds[0],
      nextTracks: data.artist.topTrackIds.slice(1),
      history: []
    }));
  })
);
