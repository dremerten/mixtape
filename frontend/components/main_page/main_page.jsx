import React from 'react';
import SideBar from '../sidebar/sidebar';
import Search from '../search/search';
import NowPlayingBar from '../nowplaying/nowplaying';
import MusicPortal from '../music_portal';
import PlaylistContainer from '../featured_playlists/playlist_container';

import {
  Route,
  Switch,
} from 'react-router-dom';

const MainPage = ( { currentUser }) => {
  return(
    <div className="main-page">
      <div>
        <SideBar currentUser={currentUser}/>
        <Switch>
          <Route path="/browse/search" component={Search}/>
          <Route path="/browse/playlists/:playlistId" component={PlaylistContainer} />
          <Route path="/browse/:musicPage" component={MusicPortal}/>
        </Switch>
        <NowPlayingBar/>
      </div>
    </div>
  );
}

export default MainPage;





















const thing = '<Route path="browse/playlist/:playlistId" component={PlaylistContainer}/>'
