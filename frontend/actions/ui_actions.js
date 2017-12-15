export const SET_SCROLL_POSITION = 'SET_SCROLL_POSITION';
export const DISPLAY_PLAYLIST_FORM = 'DISPLAY_PLAYLIST_FORM';
export const HIDE_PLAYLIST_FORM = 'HIDE_PLAYLIST_FORM';
export const HIDE_ALL_DROPDOWNS = 'HIDE_ALL_DROPDOWNS';
export const SHOW_DROPDOWN = 'SHOW_DROPDOWN';

export const setScrollPosition = pos => ({
  type: SET_SCROLL_POSITION, pos
});

export const displayPlaylistForm = () => ({
  type: DISPLAY_PLAYLIST_FORM
});

export const hidePlaylistForm = () => ({
  type: HIDE_PLAYLIST_FORM
});

export const hideAllDropdowns = () => ({
  type: HIDE_ALL_DROPDOWNS
});

export const showDropdown = name => ({
  type: SHOW_DROPDOWN, name
});
