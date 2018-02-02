import React from 'react';
import { connect } from 'react-redux';
import TopResult from './TopResult';
import TopTracks from './TopTracks';

const TopSearchResults = () => (
  <div className='search__top-results'>
    <TopResult />
    <TopTracks />
  </div>
);

export default TopSearchResults;
