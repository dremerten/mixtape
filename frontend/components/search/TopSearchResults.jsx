import React from 'react';
import { connect } from 'react-redux';
import TopArtist from './TopArtist';
import TopTracks from './TopTracks';

const TopSearchResults = () => (
  <div className='search__top-results'>
    <TopArtist />
    <TopTracks />
  </div>
);

export default TopSearchResults;
