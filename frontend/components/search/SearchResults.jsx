import React from 'react';
import SearchNav from './SearchNav';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { foundResults } from '../../selectors/search_selectors';
import TopSearchResults from './TopSearchResults';
import SearchTracks from './SearchTracks';
import SearchArtists from './SearchArtists';
import SearchAlbums from './SearchAlbums';
import SearchPlaylists from './SearchPlaylists';

const SearchResults = ({ foundResults }) => {
  return (
    <div>
      <SearchNav isVisible />
      { foundResults ?
        <div>
          <Route path='/search/results' component={TopSearchResults} />
          <Route path='/search/tracks' component={SearchTracks} />
          <Route path='/search/artists' component={SearchArtists} />
          <Route path='/search/albums' component={SearchAlbums} />
          <Route path='/search/playlists' component={SearchPlaylists} />
        </div>
      :
        <Redirect to='/search' />
      }
    </div>
  );
};

const mapStateToProps = state => ({
  foundResults: foundResults(state)
});

export default connect(mapStateToProps)(SearchResults);
