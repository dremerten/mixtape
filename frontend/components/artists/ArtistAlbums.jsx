import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GenericMusicIndex from '../featured_playlists/GenericMusicIndex';
import ArtistAlbumIndexItem from './ArtistAlbumIndexItem';
import _ from 'lodash';

class ArtistAlbums extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };

    this.expandIndex = this.expandIndex.bind(this);
    this.collapseIndex = this.collapseIndex.bind(this);
  }

  collapseIndex() {
    this.setState({ expanded: false });
  }

  expandIndex() {
    this.setState({ expanded: true });
  }

  handleIndexExpand() {
    if (this.state.expanded) {
      this.collapseIndex();
    } else {
      this.expandIndex();
    }
  }

  render() {
    const style = { display: this.props.isHidden ? "none" : "" };
    const expandText = this.state.expanded ? "LESS" : "MORE";

    return(
      <div className='artist-albums' style={style}>
        <h1 className='playlists-header'>Albums</h1>
        <GenericMusicIndex { ...this.props}/>
        <div
          className='expand-button'
          onClick={this.handleIndexExpand}
          >SHOW {expandText}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const artistId = ownProps.match.params.artistId;
  const albumIds = state.entities.artists[artistId].albumIds;

  return {
    IndexItem: ArtistAlbumIndexItem,
    indexItems: albumIds.map(id => state.entities.albums[id]),
    isHidden: _.isEmpty(albumIds)
  };
};

export default withRouter(connect(
  mapStateToProps
)(ArtistAlbums));
