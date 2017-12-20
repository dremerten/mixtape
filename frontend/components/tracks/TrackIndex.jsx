import React from 'react';
import Track from './track';

const TrackIndex = (props) => (
  <ol className='tracklist-container'>
    {
      props.tracks.map(track => (
        <Track
          { ...props}
          track={track}
          collectionId={props.playlist.id}
          showDropdown={props.showDropdown}
          key={track.id} />
        )
      )
    }
  </ol>
);

export default TrackIndex;
