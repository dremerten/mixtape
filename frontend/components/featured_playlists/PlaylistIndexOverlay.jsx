import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylistThenPlay } from '../../actions/playlist_actions';
import { playFullCollection } from '../../actions/audio_actions';

const mapStateToProps = ({ nowPlaying }, { id }) => {
  const context = `playlists-${id}`;

  return {
    inProgress: nowPlaying.inProgress && nowPlaying.context === context
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  playFullCollection: () => dispatch(playFullCollection(id))
});

const OverlayPlay = props => {
  const buttonType = props.inProgress ? 'pauseButtonLarge' : 'playButtonLarge';

  return(
    <div className='playlist-image-overlay'>
      <div
        className='overlay-play-button-container'
        onClick={props.playFullCollection}
        >
        <img src={staticAssets[buttonType]} className='overlay-play-button' />
      </div>
    </div>
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OverlayPlay);
