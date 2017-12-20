import React from 'react';


const TrackIndex = ({tracks}) => (
  tracks.map(track => (
    <Track
      { ...this.props}
      track={track}
      collectionId={this.props.playlist.id}
      showDropdown={this.props.showDropdown}
      key={track.id} />
    )
  )
);

export default TrackIndex;
