import React from 'react';
import SideBar from '../sidebar/sidebar';
import SearchContainer from '../search/search_container';
import NowPlayingBarContainer from '../nowplaying/nowplaying_container';
import MusicPortal from '../music_portal';
import PlaylistContainer from '../featured_playlists/playlist_container';
import AlbumContainer from '../albums/album_container';

import {
  Route,
  Switch
} from 'react-router-dom';

const MainPage = ({ currentUser }) => {
  return(
    <div className="main-page">
      <div className="main-page-container">
        <SideBar currentUser={currentUser}/>
        <Switch>
          <Route path="/browse/search" component={SearchContainer}/>
          <Route path="/browse/playlists/:playlistId" component={PlaylistContainer} />
          <Route path="/browse/albums/:albumId" component={AlbumContainer} />
          <Route path="/browse/:musicPage" component={MusicPortal}/>
          <Route path="/collection/playlists" component={MusicPortal}/>
        </Switch>
        <NowPlayingBarContainer/>
      </div>
    </div>
  );
}

export default MainPage;





















const thing = '<Route path="browse/playlist/:playlistId" component={PlaylistContainer}/>'
