import React from 'react';
import TrackList from './TrackList';
import Spinner from '../Spinner';
export default function(props) {
  const { loading, background } = this.props;

  return (
    loading ?
      <Spinner /> :
      <div className="list">
        <TrackList {...props} />
    </div>
  );
}

export default GenericTrackIndex;
