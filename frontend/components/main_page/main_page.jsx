import React from 'react';
import SideBar from '../sidebar/sidebar';
import NowPlayingBar from '../nowplaying/nowplaying';
import GenresIndex from '../genres/genres_index';
import NewReleasesIndex from '../new_releases/new_releases_index';
import FeaturedPlaylistsIndex from '../featured_playlists/featured_playlists_index';
import {
  Route,
  Switch,
} from 'react-router-dom';



const MainPage = ( { currentUser }) => {
  return(
    <div className={`main-page`}>
      <SideBar currentUser={currentUser}/>
      <Switch>
        <Route exact path="/browse/featured" component={FeaturedPlaylistsIndex} />
        <Route exact path="/browse/genres" component={GenresIndex} />
        <Route exact path="/browse/newreleases" component={NewReleasesIndex} />
      </Switch>
      <NowPlayingBar />
    </div>
  );
}

export default MainPage;
