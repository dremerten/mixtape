import React from 'react';
import NavBar from '../NavBar';
import Spinner from '../Spinner';

class MusicPageContainer extends React.Component {
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
    const { indexItems, itemType, background, header, MusicIndex, IndexItem } = this.props;

    return(
      <div className="featured-playlists-container"
        style={background}
        ref={(el) => { this.element = el; }}
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
