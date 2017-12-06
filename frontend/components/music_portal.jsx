import React from 'react';
import GenresIndex from './genres/genres_index';
import MusicIndexContainer from './featured_playlists/music_index_container';
import NavBarContainer from './NavBar';
import BrowseNav from './BrowseNav';
import CollectionsNav from './CollectionsNav';
import { Route, Switch } from 'react-router-dom';

const MusicPortal = (props) => {
    return(
      <div>
        <Switch>
          <Route path='/browse' component={BrowseNav} { ...props } />
          <Route path='/collection' component={CollectionsNav} { ...props } />
        </Switch>
        <Route path="/browse/featured" component={MusicIndexContainer} />
        <Route path="/browse/newreleases" component={MusicIndexContainer} />
        <Route path="/collection/playlists" component={MusicIndexContainer} />
      </div>
    );
};

export default MusicPortal;
