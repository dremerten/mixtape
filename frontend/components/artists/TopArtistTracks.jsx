import React from 'react';
import TrackList from '../tracks/TrackList';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const artistId = ownProps.match.params.artistId;
  const trackIds = state.entities.artists[artistId].topTrackIds.slice(0, 5);

  return {
    artistIsVisible: false,
    indexItems: trackIds.map(id => state.entities.tracks[id])
  };
};

const TopArtistTracks = (props) => (
  <div className='artist-tracks'>
    <h1 className='playlists-header'>Popular</h1>
    <TrackList { ...props} />
  </div>
);

export default withRouter(connect(
  mapStateToProps
)(TopArtistTracks));
