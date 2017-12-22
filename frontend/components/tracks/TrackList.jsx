import React from 'react';
import Track from './TrackContainer';

const TrackList = (props) => (
  <ol className='tracklist-container'>
    {
      props.indexItems.map(track => (
        <Track
          { ...props}
          track={track}
          key={track.id}
          artistIsVisible
           />
        )
      )
    }
  </ol>
);

export default TrackList;

// collectionId={props.playlist.id}
// showDropdown={props.showDropdown}
