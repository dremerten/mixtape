import React from 'react';
import GenresIndex from './genres/genres_index';
import MusicIndexContainer from './featured_playlists/music_index_container';
import NavBar from './NavBar';

import { Route, Switch } from 'react-router-dom';

const MusicPortal = (props) => {

    return(
      <div>
        <NavBar props={props}/>
        <Route path="/browse/featured" component={MusicIndexContainer} />
        <Route path="/browse/newreleases" component={MusicIndexContainer} />
        <Route path="/collection/playlists" component={MusicIndexContainer} />
      </div>
    );
};

export default MusicPortal;
