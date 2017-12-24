import React from 'react';
import Track from './TrackContainer';

const TrackList = (props) => {
  return(
  <ol className='tracklist'>
    {
      props.indexItems.map(track => (
        <Track
          { ...props}
          track={track}
          key={track.id}
          artistIsVisible={props.artistIsVisible}
           />
        )
      )
    }
  </ol>
);
};

export default TrackList;

// collectionId={props.playlist.id}
// showDropdown={props.showDropdown}
