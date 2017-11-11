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
      this.props.fetchItems({ featured: true })
    }
  }

  componentWillUnmount() {
    debugger
    this.props.removeItems();
  }

  componentWillReceiveProps(newProps) {
    debugger
    if (newProps.itemType == this.props.itemType) {
      debugger
      return;
    } else if (newProps.itemType == "album"){
      newProps.fetchItems({ order: 'recent' });
    } else {
      newProps.fetchItems({ featured: true });
    }
  }

  render() {
    let indexItems;
    let background;

    if (this.props.itemType == "album") {
      background = { background: 'linear-gradient(rgb(15, 138, 115), rgb(1, 13, 11) 85%) fixed' };
    } else {
      background = { background: 'linear-gradient(rgb(43, 64, 110), rgb(4, 6, 11) 85%) fixed' };
    }

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
      <div className="featured-playlists-container" style={background}>
        <div className="list">
          <h1 className="playlists-header">Evening Jams</h1>
          <ul className="playlist-items">
            {indexItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default FeaturedPlaylistsIndex;
