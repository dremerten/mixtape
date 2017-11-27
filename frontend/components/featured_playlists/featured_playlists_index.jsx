import React from 'react';
import NavBar from '../NavBar';
import { isEmpty } from 'lodash';
import PlaylistsIndexItem from './playlists_index_item';
import MusicIndexItem from '../music/music_index_item';

const LateEveningGreeting = "Sleep Well!";
const EarlyEveningGreeting = "Wind Down";
const AfternoonGreeting = "Daytime Jams";
const MorningGreeting = "Rise and Shine";
const FridayNightGreeting = "Friday Night";
const SaturdayNightGreeting = "Saturday Night";
const SundayGreeting = "Sunday Wind Down";

class FeaturedPlaylistsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: props.loading };
  }

  componentDidMount() {
    if (this.props.itemType == "album") {
      this.props.fetchItems({ order: 'recent' });
    } else {
      let filter = (this.props.itemType == "playlist" ? true : null);
      this.props.fetchItems({ featured: filter });
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loading != this.state.loading) {
      this.setState({ loading: !this.state.loading });
    } else if (newProps.itemType == this.props.itemType) {
      return;
    } else if (newProps.loading != this.state.loading) {
      this.setState({ loading: !this.state.loading });
    } else if (newProps.itemType == "album") {
      this.props.removeItems();
      newProps.fetchItems({ order: 'recent' });
    } else {
      this.props.removeItems();
      let searchFilter = (newProps.itemType == "playlist" ? true : null);
      newProps.fetchItems({ featured: searchFilter });
    }
  }

  setGreeting() {
    let date = new Date();
    let time = date.getHours();
    let day = date.getDay();
    let greeting;

    if (day == 0) {
      greeting = SundayGreeting;
    } else if (day == 5) {
      greeting = SaturdayNightGreeting;
    } else if (day == 4) {
      greeting = FridayNightGreeting;
    } else if (time > 20) {
      greeting = LateEveningGreeting;
    } else if (time > 16) {
      greeting = EarlyEveningGreeting;
    } else if (time > 11) {
      greeting = AfternoonGreeting;
    } else {
      greeting = MorningGreeting;
    }

    return greeting;
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
        header = this.setGreeting();
        background = { background: 'linear-gradient(rgb(43, 64, 110), rgb(4, 6, 11) 85%) fixed' };
    }

    if (!this.state.loading) {
      indexItems = this.props.indexItems.map(item => (
        <MusicIndexItem
          item={item}
          history={this.props.history}
          key={item.id}
          itemType={this.props.itemType}
          />
        )
      );
    }

    return(
      <div className="featured-playlists-container"
           style={background}
           id="music-items"
           >
        { this.state.loading ?
          <div className="loading-spinner">
          </div>
        :
        <div className="list">
          <h1 className="playlists-header">{header}</h1>
          <ul className="playlist-items">
            {indexItems}
          </ul>
        </div>
        }
      </div>
    );
  }
}

export default FeaturedPlaylistsIndex;
