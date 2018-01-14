import React from 'react';
import Spinner from '../Spinner';
import UserPlaylistModal from '../modals/UserPlaylistModal';
import NewPlaylistButton from '../buttons/NewPlaylistButton';
import { Route } from 'react-router-dom';

class MusicPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.setScrollPosition(0);

    if (this.props.shouldFetchItems) {
      this.props.fetchItems();
    }
  }

  handleScroll() {
    this.props.setScrollPosition(this.container.scrollTop);
  }

  render() {
    const {
      indexItems,
      itemType,
      background,
      header,
      MusicIndex,
      IndexItem
    } = this.props;

    return(
      <div className="featured-playlists-container"
        style={background}
        ref={(el) => { this.container = el; }}
        onScroll={this.handleScroll}
        >
        <div className="list">
          <h1 className="playlists-header">{header}</h1>
          <ul className='playlist-items'>
            <MusicIndex
              indexItems={indexItems}
              itemType={itemType}
              IndexItem={IndexItem}
              { ...this.props }
              />
          </ul>
        </div>
      </div>
    );
  }
}

export default MusicPageContainer;

// <Route path='/collection' component={NewPlaylistButton} />
