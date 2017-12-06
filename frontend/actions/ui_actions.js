export const SET_SCROLL_POSITION = 'SET_SCROLL_POSITION';
export const DISPLAY_PLAYLIST_FORM = 'DISPLAY_PLAYLIST_FORM';
export const HIDE_PLAYLIST_FORM = 'HIDE_PLAYLIST_FORM';

export const setScrollPosition = pos => ({
  type: SET_SCROLL_POSITION, pos
});

export const displayPlaylistForm = () => ({
  type: DISPLAY_PLAYLIST_FORM
});

export const hidePlaylistForm = () => ({
  type: HIDE_PLAYLIST_FORM
});
