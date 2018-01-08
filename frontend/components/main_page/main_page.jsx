import React from 'react';
import SideBar from '../sidebar/sidebar';
import SearchContainer from '../search/search_container';
import NowPlayingBarContainer from '../nowplaying/nowplaying_container';
import MusicPortal from '../music_portal';
import PlaylistContainer from '../featured_playlists/playlist_container';
import AlbumContainer from '../albums/album_container';
import AlertBar from '../AlertBar';
import DialogueContainer from '../DialogueContainer';

import {
  Route,
  Switch
} from 'react-router-dom';

const MainPage = ({ currentUser }) => {
  return(
    <div className="main-page">
      <div className="main-page-container">
        <SideBar currentUser={currentUser}/>
        <AlertBar />
        <Switch>
          <Route path="/browse/search" component={SearchContainer}/>
          <Route exact path="/browse/playlists/:playlistId" component={PlaylistContainer} />
          <Route exact path="/collection/playlists/:playlistId" component={PlaylistContainer} />
          <Route exact path="/browse/albums/:albumId" component={AlbumContainer} />
          <Route path="/" component={MusicPortal}/>
        </Switch>
        <DialogueContainer />
        <NowPlayingBarContainer/>
      </div>
    </div>
  );
}

export default MainPage;
