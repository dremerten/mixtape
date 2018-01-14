export const SET_SCROLL_POSITION = 'SET_SCROLL_POSITION';
export const DISPLAY_PLAYLIST_FORM = 'DISPLAY_PLAYLIST_FORM';
export const HIDE_PLAYLIST_FORM = 'HIDE_PLAYLIST_FORM';
export const HIDE_ALL_DROPDOWNS = 'HIDE_ALL_DROPDOWNS';
export const SHOW_DROPDOWN = 'SHOW_DROPDOWN';
export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CLOSE_ALL_MODALS = 'CLOSE_ALL_MODALS';

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

export const showModal = (name, data = {}) => ({
  type: SHOW_MODAL, name, data
});

export const closeModal = name => ({
  type: CLOSE_MODAL, name
});

export const closeAllModals = () => ({
  type: CLOSE_ALL_MODALS
});
