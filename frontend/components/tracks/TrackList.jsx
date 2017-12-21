import React from 'react';
import Track from './track';

const TrackList = (props) => (
  <ol className='tracklist-container'>
    {
      props.tracks.map(track => (
        <Track
          { ...props}
          track={track}
          key={track.id} />
        )
      )
    }
  </ol>
);

export default TrackList;

// collectionId={props.playlist.id}
// showDropdown={props.showDropdown}
