import React from 'react';
import NavBar from '../NavBar';
import { isEmpty } from 'lodash';
import PlaylistsIndexItem from './playlists_index_item';
import MusicIndexItem from '../music/music_index_item';

class FeaturedPlaylistsIndex extends React.Component {

  componentDidMount() {
    if (this.props.itemType == "album") {
      this.props.fetchItems({ order: 'recent' })
    } else {
      let filter = (this.props.itemType == "playlist" ? true : null);
      this.props.fetchItems({ featured: filter })
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.itemType == this.props.itemType) {
      return;
    } else if (newProps.itemType == "album"){
      this.props.removeItems();
      newProps.fetchItems({ order: 'recent' });
    } else {
      this.props.removeItems();
      let filter = (newProps.itemType == "playlist" ? true : null);
      newProps.fetchItems({ featured: filter });
    }
  }

  render() {
    let indexItems;
    let background;
    let header;

    if (this.props.itemType == "album") {
        header = "Our Newest Releases";
        background = { background: 'linear-gradient(rgb(15, 138, 115), rgb(1, 13, 11) 85%) fixed' };
    } else if (this.props.itemType == "userPlaylist") {
        header = "Your Playlists";
        background = { background: 'linear-gradient(rgb(43, 64, 110), rgb(4, 6, 11) 85%) fixed' };
    } else {
        header = "Evening Jams";
        background = { background: 'linear-gradient(rgb(43, 64, 110), rgb(4, 6, 11) 85%) fixed' }
    };

    // if (this.props.itemType == "album") {
    //   background = { background: 'linear-gradient(rgb(15, 138, 115), rgb(1, 13, 11) 85%) fixed' };
    //   header = "Our Newest Releases"
    // } else {
    //   background = { background: 'linear-gradient(rgb(43, 64, 110), rgb(4, 6, 11) 85%) fixed' };
    // }

    if (!_.isEmpty(this.props.indexItems)) {
      indexItems = this.props.indexItems.map(item => (
        <MusicIndexItem
          item={item}
          history={this.props.history}
          key={item.id}
          itemType={this.props.itemType}
          />
        )
      )
    }


    return(
      <div className="featured-playlists-container" style={background} id="music-items">
        <div className="list">
          <h1 className="playlists-header">{header}</h1>
          <ul className="playlist-items">
            {indexItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default FeaturedPlaylistsIndex;
