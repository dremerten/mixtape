import React from 'react';
import BrowseNav from './BrowseNav';
import CollectionsNav from './CollectionsNav';
import AlbumIndex from './featured_playlists/AlbumIndex';
import PlaylistIndex from './featured_playlists/PlaylistIndex';
import UserPlaylistIndex from './featured_playlists/UserPlaylistIndex';
import { Route, Switch } from 'react-router-dom';

const MusicPortal = (props) => {
    return(
      <div>
        <Switch>
          <Route path='/browse' component={BrowseNav} { ...props } />
          <Route path='/collection' component={CollectionsNav} { ...props } />
        </Switch>
        <Route path='/browse/newreleases' component={AlbumIndex} />
        <Route path='/browse/featured' component={PlaylistIndex} />
        <Route path='/collection/playlists' component={UserPlaylistIndex} />

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
