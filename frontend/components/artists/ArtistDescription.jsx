import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ArtistDescription = props => (
  <div className='artist-description'>
    <p>
      {props.artist.about}
    </p>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  artist: state.entities.artists[ownProps.match.params.artistId]
});

export default withRouter(connect(
  mapStateToProps
)(ArtistDescription));
