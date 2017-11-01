import { connect } from 'react-redux';
import NowPlayingBar from 'nowplaying';

const mapStateToProps = state => ({
  currentTrack: state.entities.nowPlaying.currentTrack;
})
