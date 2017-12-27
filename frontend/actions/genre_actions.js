import * as GenreApiUtil from '../util/genre_api_util';

export const RECEIVE_GENRES = 'RECEIVE_GENRES';
export const RECEIVE_GENRE = 'RECEIVE_GENRE';
export const REMOVE_GENRES = 'REMOVE_GENRES';
export const START_LOADING_ALL_GENRES = 'START_LOADING_ALL_GENRES';
export const START_LOADING_SINGLE_GENRE = 'START_LOADING_SINGLE_GENRE';

export const receiveGenres = genres => ({
  type: RECEIVE_GENRES, genres
});

export const receiveGenre = data => ({
  type: RECEIVE_GENRE, data
});

export const removeGenres = () => ({
  type: REMOVE_GENRES
});

export const startLoadingAllGenres = () => ({
  type: START_LOADING_ALL_GENRES
});

export const startLoadingSingleGenre = () => ({
  type: START_LOADING_SINGLE_GENRE
});

export const fetchGenres = () => dispatch => {
  dispatch(startLoadingAllGenres());
  return GenreApiUtil.fetchGenres().then(genres => (
    dispatch(receiveGenres(genres))
  ));
};

export const fetchGenre = id => dispatch => {
  dispatch(startLoadingSingleGenre());
  return GenreApiUtil.fetchGenre(id).then(genre => (
    dispatch(receiveGenres(genre))
  ));
};
