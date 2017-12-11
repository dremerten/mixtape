import React from 'react';
import NavBar from '../NavBar';
import MusicIndexItem from '../music/music_index_item';

class GenericMusicIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: props.loading,
      // indexItems: props.indexItems
     };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.fetchItems();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loading != this.state.loading) {
      this.setState({ loading: !this.state.loading });
    } else if (newProps.itemType != this.props.itemType) {
      this.props.removeItems();
      newProps.fetchItems();
    }
  }

  handleScroll() {
    this.props.setScrollPosition(this.element.scrollTop);
  }

  render() {
    let indexItems;
    // let background;

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
        style={this.props.background}
        id="music-items"
        ref={(el) => { this.element = el; }}
        onScroll={this.handleScroll}
        >
        { this.state.loading ?
          <div className="loading-spinner">
          </div>
        :
        <div className="list">
          <h1 className="playlists-header">{this.props.header}</h1>
          <ul className="playlist-items">
            {indexItems}
          </ul>
        </div>
        }
      </div>
    );
  }
}

export default GenericMusicIndex;
