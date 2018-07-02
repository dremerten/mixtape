import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { playFullCollection } from '../../actions/audio_actions';
import { selectEntity } from '../../selectors/entity_selectors';

const mapStateToProps = (state, ownProps) => {
  const context = ownProps.location.pathname.split('/').slice(2).join('-');
  const entity = selectEntity(state, ownProps);

  return {
    tracks: entity.trackIds || [],
    inProgress: state.player.inProgress &&
                state.player.context === context
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const context = ownProps.location.pathname.split('/').slice(2).join('-');

  return {
    playFullCollection: tracks => dispatch(playFullCollection({
      context,
      currentTrack: tracks[0],
      nextTracks: tracks.slice(1),
      history: []
    }))
  };
};

const Play = props => {
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

const OverlayPlay = props => {
  const buttonType = props.inProgress ? 'pauseButtonLarge' : 'playButtonLarge';

  return(
    <div className='playlist-image-overlay'>
      <div
        className='overlay-play-button-container'
        onClick={() => props.playFullCollection(props.tracks)}
        >
        <img src={staticAssets[buttonType]} className='overlay-play-button' />
      </div>
    </div>
  );
};

export const PlayButton = withRouter(connect(mapStateToProps, mapDispatchToProps)(Play));

export const OverlayPlayButton = withRouter(connect(mapStateToProps, mapDispatchToProps)(OverlayPlay));
