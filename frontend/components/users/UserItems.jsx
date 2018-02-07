import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import UserPagePlaylists from './UserPagePlaylists';
import UserFollowers from './UserFollowers';
import UserFollowings from './UserFollowings';

const UserItems = ({ userId }) => (
  <div className='user-content'>
    <Switch>
      <Route path="/users/:userId/playlists" component={UserPagePlaylists}/>
      <Route path="/users/:userId/followers" component={UserFollowers} />
      <Route path="/users/:userId/following" component={UserFollowings} />
      <Redirect to={`/users/${userId}/playlists`} />
    </Switch>
  </div>
);


export default UserItems
