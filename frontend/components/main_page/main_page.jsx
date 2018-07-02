import React from 'react';
import SideBar from '../sidebar/sidebar';
import Search from '../search/search';
import NowPlayingBarContainer from '../nowplaying/nowplaying_container';
import MusicPortal from '../music_portal';
import PlaylistContainer from '../featured_playlists/PlaylistContainer';
import AlbumContainer from '../albums/album_container';
import AlertBar from '../shared/AlertBar';
import DialogueContainer from '../shared/DialogueContainer';
import UserPage from '../users/UserPage';

import {
  Route,
  Switch
} from 'react-router-dom';

const MainPage = ({ currentUser }) => (
    <div className="main-page">
      <div className="main-page-container">
        <SideBar currentUser={currentUser}/>
        <AlertBar />
        <Switch>
          <Route path="/search" component={Search}/>
          <Route exact path="/browse/playlists/:playlistId" component={PlaylistContainer} />
          <Route exact path="/collection/playlists/:playlistId" component={PlaylistContainer} />
          <Route exact path="/browse/albums/:albumId" component={AlbumContainer} />
          <Route exact path="/browse/albums/:albumId" component={AlbumContainer} />
          <Route path="/users/:userId" component={UserPage} />
          <Route path="/" component={MusicPortal}/>
        </Switch>
        <DialogueContainer />
        <NowPlayingBarContainer/>
      </div>
    </div>
)

export default MainPage;
