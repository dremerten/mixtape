import React from 'react';
import GenresIndex from './genres/genres_index';
import NewReleasesIndex from './new_releases/new_releases_index';
import FeaturedPlaylistsIndex from './featured_playlists/featured_playlists_index';
import NavBar from './NavBar';

import { Route, Switch } from 'react-router-dom';
const MusicPortal = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/browse/featured" component={FeaturedPlaylistsIndex} />
      <Route exact path="/browse/genres" component={GenresIndex} />
      <Route exact path="/browse/newreleases" component={NewReleasesIndex} />
    </Switch>
  </div>
)

export default MusicPortal;
