import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { playFullCollection } from '../../actions/audio_actions';

const PlayButton = props => {
  const buttonText = props.inProgress ? 'PAUSE' : 'PLAY';

  return (
    <div
      className='play-collection-button'
      onClick={() => props.playFullCollection(props.tracks)}
      >
      {buttonText}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const context = `artists-${ownProps.match.params.artistId}`;
  const inProgress = state.nowPlaying.inProgress &&
                      state.nowPlaying.context === context;


  return {
    inProgress,
    tracks: state.entities.artists[ownProps.match.params.artistId].topTrackIds || []
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const context = `artists-${ownProps.match.params.artistId}`;

  return {
    playFullCollection: tracks => dispatch(playFullCollection({
      context,
      currentTrack: tracks[0],
      nextTracks: tracks.slice(1),
      history: []
    }))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton));
