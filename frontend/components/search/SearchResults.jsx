import React from 'react';
import SearchNav from './SearchNav';
import { Route } from 'react-router-dom';
import { connect } from 'react-router-dom';
import TopSearchResults from './TopSearchResults';

const SearchResults = props => {
  return (
    <div>
      <SearchNav isVisible />
      <Route path='/search/results' component={TopSearchResults} />
      {/*}<Route path='/search/tracks' component={SearchTracks} />
      <Route path='/search/artists' component={SearchArtists} />
      <Route path='/search/albums' component={SearchAlbums} />
      <Route path='/search/playlists' component={SearchPlaylists} />*/}
    </div>
  );
};

export default SearchResults;
