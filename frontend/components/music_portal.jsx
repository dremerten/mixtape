import React from 'react';
import BrowseNav from './BrowseNav';
import CollectionsNav from './CollectionsNav';
import AlbumIndex from './featured_playlists/AlbumIndex';
import PlaylistIndex from './featured_playlists/PlaylistIndex';
import UserPlaylistIndex from './featured_playlists/UserPlaylistIndex';
import UserTrackIndex from './tracks/UserTrackIndex';
import { Route, Switch } from 'react-router-dom';
import UserProfile from './UserProfile';
import GenreIndex from './genres/GenreIndex';
import ArtistPage from './artists/ArtistPage';
import UserArtistIndex from './featured_playlists/UserArtistIndex';

const MusicPortal = (props) => {
    return(
      <div>
        <Route path='/browse' component={BrowseNav} { ...props } />
        <Route path='/collection' component={CollectionsNav} { ...props } />
        <Route path='/browse/newreleases' component={AlbumIndex} />
        <Route path='/browse/featured' component={PlaylistIndex} />
        <Route path='/browse/genres' component={GenreIndex} />
        <Route path='/collection/playlists' component={UserPlaylistIndex} />
        <Route path='/collection/tracks' component={UserTrackIndex} />
        <Route path='/collection/artists' component={UserArtistIndex} />
        <Route path='/view/artists/:artistId' component={ArtistPage}/>
        <Route path='/account/profile' component={UserProfile} />
      </div>
    );
};

export default MusicPortal;
