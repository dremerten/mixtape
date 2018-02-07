import React from 'react';
import GenericMusicIndex from '../featured_playlists/GenericMusicIndex';
import { connect } from 'react-redux';
import UserIndexItem from './UserIndexItem';

const UserFollowers = props => (
  <GenericMusicIndex IndexItem={UserIndexItem} indexItems={props.indexItems}/>
);

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId];

  return {
    indexItems: user.followees.map(id => state.entities.users[id])
  };
};

export default connect(mapStateToProps)(UserFollowers);
