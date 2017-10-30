import React from 'react';
import GenresIndex from './genres/genres_index';
import NewReleasesIndex from './new_releases/new_releases_index';
import FeaturedPlaylistsIndexContainer from './featured_playlists/featured_playlists_index_container';
import NavBar from './NavBar';

import { Route, Switch } from 'react-router-dom';
const MusicPortal = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/browse/featured" component={FeaturedPlaylistsIndexContainer} />
      <Route exact path="/browse/genres" component={GenresIndex} />
      <Route exact path="/browse/newreleases" component={NewReleasesIndex} />
    </Switch>
  </div>
)

export default MusicPortal;
