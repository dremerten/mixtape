import React from 'react';
import Track from '../tracks/track';
import TrackList from '../tracks/TrackList';
import Spinner from '../Spinner';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    // const paramKey = Object.keys(this.props.match.params)[0];
    // const itemId = this.props.match.params[paramKey];

    // if (itemId) {
      this.props.fetchEntity(this.props.itemId);
    // }
  }

  componentWillUnmount() {
    this.props.removeItems();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loading !== this.state.loading) {
      this.setState({ loading: !this.state.loading});
    } else
    if (this.props.itemId !== newProps.itemId) {
      this.props.fetchEntity(newProps.itemId);
    }
  }

  render() {
    const { loading } = this.state;
    let background;

    if (!loading) {
      background = { background: this.props.item.background };
    }

    return(
      <div className="playlist-show-wrapper" style={background}>
      { loading ?
        <Spinner />
        :
        <div className="playlist-show-container">
          <div className="playlist-info">
            <div
              className='playlist-image show'
              style={ { backgroundImage: 'url(' + this.props.item.imageUrl + ')'} }>
              <div className="shadow-light show-light"></div>
            </div>
            <div className='headers'>
              <div className='playlist-title'>
                {this.props.item.name}
              </div>
              <div className='sub-header'>
                by <span>{this.props.item.author}</span>
              </div>
              <div className='sub-header'>
                {this.props.item.trackIds.length} SONGS
              </div>
            </div>
          </div>
          <div className='tracklist-container'>
            <TrackList
              indexItems={this.props.tracks}
              { ...this.props }
              artistIsVisible
              />
          </div>
        </div>
        }
      </div>
    );
  }

}

export default Playlist;
