import { connect } from 'react-redux';
import Playlist from '../featured_playlists/playlist';
import { fetchTracks, removeTracks } from '../../actions/track_actions';
import { fetchAlbum, removeAlbums } from '../../actions/album_actions';
import {
  play,
  pause,
  playSingleTrack
} from '../../actions/audio_actions';
import { showDropdown } from '../../actions/ui_actions';
import { playlistTracks } from '../../selectors/playlist_selector';

const mapStateToProps = (state, ownProps) => {
  const album = state.entities.albums[ownProps.match.params.albumId];

  return {
    authorLink: album && `/artists/${album.authorId}/overview`,
    item: album,
    itemId: ownProps.match.params.albumId,
    tracks: playlistTracks(album, state),
    inProgress: state.nowPlaying.inProgress,
    loading: state.ui.loading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTracks: filter => dispatch(fetchTracks(filter)),
  removeItems: () => {
    dispatch(removeTracks());
    dispatch(removeAlbums());
  },
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  playSingleTrack: track => dispatch(playSingleTrack(track)),
  fetchEntity: id => dispatch(fetchAlbum(id)),
  showDropdown: name => dispatch(showDropdown(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
