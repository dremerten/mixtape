import React from 'react';
import ArtistNav from '../ArtistNav';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ArtistHeader = (props) => {
  const style = {
    backgroundImage: `url(${props.artist.imageUrl})`
  };

  return(
    <div className='artist-header' style={style}>
      <h1>{props.artist.name}</h1>
      <ArtistNav />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    artist: state.entities.artists[ownProps.match.params.artistId]
  };
};

export default withRouter(connect(mapStateToProps)(ArtistHeader));
