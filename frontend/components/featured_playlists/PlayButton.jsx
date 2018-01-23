import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { playSingleTrack } from '../../actions/audio_actions';
import { playlistTracks } from '../../selectors/playlist_selector';

const mapStateToProps = (state, ownProps) => {
  const playlist = state.entities.playlists
                        .byId[ownProps.match.params.playlistId] || {};

  return {
    tracks: playlist.trackIds || [],
    inProgress: state.nowPlaying.inProgress
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    playSingleTrack: tracks => dispatch(playSingleTrack({
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
      className={'play-button'}
      onClick={() => props.playSingleTrack(props.tracks)}
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
        onClick={() => props.playSingleTrack(props.tracks)}
        >
        <img src={staticAssets[buttonType]} className='overlay-play-button' />
      </div>
    </div>
  );
};

export const PlayButton = withRouter(connect(mapStateToProps, mapDispatchToProps)(Play));

export const OverlayPlayButton = withRouter(connect(mapStateToProps, mapDispatchToProps)(OverlayPlay));
