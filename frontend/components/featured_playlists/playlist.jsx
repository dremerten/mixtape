import React from 'react';
import Track from '../tracks/track';
import TrackList from '../tracks/TrackList';
import Spinner from '../Spinner';
import PlaylistInfo from './PlaylistInfo';
import { Link } from 'react-router-dom';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.props.fetchEntity(this.props.itemId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loading !== this.state.loading) {
      this.setState({ loading: !this.state.loading});
    } else if (this.props.itemId !== newProps.itemId) {
      this.setState({ loading: true }, () => (
        this.props.fetchEntity(newProps.itemId)
      ));
    }
  }

  render() {
    const { loading } = this.state;

    return(
      loading ?
        <div className="playlist-show-wrapper">
          <Spinner />
        </div>
        :
        <div className="playlist-show-wrapper" style={ { background: this.props.item.background } }>
          <div className="playlist-show-container">
            <PlaylistInfo />
            <div className='tracklist-container'>
              <TrackList
                indexItems={this.props.tracks}
                { ...this.props }
                artistIsVisible
                />
            </div>
          </div>
        </div>
    );
  }

}

export default Playlist;

// <div
//   className='playlist-image show'
//   style={ { backgroundImage: 'url(' + this.props.item.imageUrl + ')'} }>
//   <div className="shadow-light show-light"></div>
// </div>
//
