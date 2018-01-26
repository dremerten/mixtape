import React from 'react';
import PlaylistFollowButton from './PlaylistFollowButton';
import PlaylistDropdownButton from '../dropdowns/PlaylistDropDownButton';

const PlaylistButtons = () => (
  <div className="playlist-buttons">
    <PlaylistFollowButton />
    <PlaylistDropdownButton />
  </div>
);

export default PlaylistButtons;
