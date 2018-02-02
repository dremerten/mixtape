import React from 'react';
import Track from './TrackContainer';

const TrackList = (props) => (
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

export default TrackList;
