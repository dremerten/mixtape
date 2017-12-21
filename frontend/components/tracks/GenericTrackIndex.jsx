import React from 'react';
// import UserTrackListContainer from './UserTrackListContainer';
import TrackList from './TrackList';
import Spinner from '../Spinner';
// export default function(props) {
class GenericTrackIndex extends React.Component {

  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    const { loading } = this.props.loading;
    return (
      <div className="featured-playlists-container"
        style={this.props.background} >
        { loading ?
          <Spinner />
          :
          <div className="list">
            <TrackList {...this.props} />
          </div>
        }
      </div>
    );
  }
}

export default GenericTrackIndex;
