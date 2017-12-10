import React from 'react';
import GenresIndex from './genres/genres_index';
import MusicIndexContainer from './featured_playlists/music_index_container';
import NavBarContainer from './NavBar';
import BrowseNav from './BrowseNav';
import CollectionsNav from './CollectionsNav';
import SearchContainer from './search/search_container';
import SideBar from './sidebar/sidebar';
import { Route, Switch } from 'react-router-dom';

const MusicPortal = (props) => {
    return(
      <div>
        <Switch>
          <Route path='/browse' component={BrowseNav} { ...props } />
          <Route path='/collection' component={CollectionsNav} { ...props } />
        </Switch>
        < MusicIndexContainer />
      </div>
    );
};

export default MusicPortal;

// const scraps = {
//   scraps: <Route path="/browse/newreleases" component={MusicIndexContainer} />
// <Route path="/collection/playlists" component={MusicIndexContainer} />;
// }
// <Route path="/browse/search" component={SearchContainer} />

// <Route path="/browse/playlists/:playlistId" component={PlaylistContainer} />
// <Route path="/browse/albums/:albumId" component={AlbumContainer} />
