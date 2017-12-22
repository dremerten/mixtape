import React from 'react';
import NavBar from '../NavBar';
import MusicIndexItem from './music_index_item';
import Spinner from '../Spinner';

class GenericMusicIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.fetchItems();
  }

  componentWillUnmount() {
    this.props.removeItems();
  }

  handleScroll() {
    this.props.setScrollPosition(this.element.scrollTop);
  }

  render() {
    const indexItems = this.props.indexItems.map(item => (
      <MusicIndexItem
        key={item.id}
        item={item}
        history={this.props.history}
        itemType={this.props.itemType}
        />
      )
    );

    return(
      <div className="featured-playlists-container"
        style={this.props.background}
        ref={(el) => { this.element = el; }}
        onScroll={this.handleScroll}
        >

        <div className="list">
          <h1 className="playlists-header">{this.props.header}</h1>
          <ul className="playlist-items">
            {indexItems}
          </ul>
        </div>

      </div>
    );
  }
}

export default GenericMusicIndex;
