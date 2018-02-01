import React from 'react';
import TrackList from '../tracks/TrackList';
import { connect } from 'react-redux';

const SearchTracks = function({ indexItems }) {
  return (
    <div className='search__tracks'>
      <TrackList indexItems={indexItems} artistIsVisible />
    </div>
  );
};

const mapStateToProps = state => ({
  indexItems: state.search.tracks.map(id => state.entities.tracks[id])
});

export default connect(mapStateToProps)(SearchTracks);
