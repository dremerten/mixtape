import React from 'react';
import Spinner from '../Spinner';
import UserPlaylistModal from '../modals/UserPlaylistModal';
import NewPlaylistButton from '../buttons/NewPlaylistButton';
import { Route } from 'react-router-dom';

class MusicPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { fetched : false };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.setScrollPosition(0);

    if (this.props.shouldFetchItems) {
      this.props.fetchItems(this.props.optData).then(() => this.setState({ fetched: true }));
      return;
    }

    this.setState({ fetched: true });
  }


  handleScroll() {
    this.props.setScrollPosition(this.container.scrollTop);
  }

  render() {
    if (!this.state.fetched) return null;

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
