import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const REMOVE_ALBUMS = 'REMOVE_ALBUMS';
export const START_LOADING_ALL_ALBUMS = 'START_LOADING_ALL_ALBUMS';
export const START_LOADING_SINGLE_ALBUM = 'START_LOADING_SINGLE_ALBUM';

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS, albums
});

export const receiveAlbum = data => ({
  type: RECEIVE_ALBUM, data
});

export const removeAlbums = () => ({
  type: REMOVE_ALBUMS
});

export const startLoadingAllAlbums = () => ({
  type: START_LOADING_ALL_ALBUMS
});

export const startLoadingSingleAlbum = () => ({
  type: START_LOADING_SINGLE_ALBUM
});

export const fetchAlbums = filter => dispatch => {
  dispatch(startLoadingAllAlbums());
  return AlbumApiUtil.fetchAlbums(filter).then(albums =>
    dispatch(receiveAlbums(albums))
  );
};

export const fetchAlbum = id => dispatch => {
  dispatch(startLoadingSingleAlbum());
  return AlbumApiUtil.fetchAlbum(id).then(album =>
    dispatch(receiveAlbum(album))
  );
};
