import React from 'react';
import ArtistNav from '../ArtistNav';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ArtistFollowButton from './ArtistFollowButton';

const ArtistHeader = (props) => {
  const style = {
    backgroundImage: `url(${props.artist.hero})`
  };

  return(
    <div className='artist-header' style={style}>
      <span>{props.artist.followCount} FOLLOWERS</span>
      <h1>{props.artist.name}</h1>
      <div className='artist-buttons'>
        <ArtistFollowButton followed={props.followed} />
      </div>
      <ArtistNav />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const artistId = parseInt(ownProps.match.params.artistId);

  return {
    artist: state.entities.artists[artistId],
    followed: state.session.currentUser.followIds.artists.includes(artistId)
  };
};

export default withRouter(connect(mapStateToProps)(ArtistHeader));
