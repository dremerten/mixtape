import React from 'react';
import { connect } from 'react-redux';
import TrackList from '../tracks/TrackList';

const mapStateToProps = state => {
  return {
    indexItems: state.search.tracks.slice(0, 5)
                     .map(id => state.entities.tracks[id]),
  };
};

const TopTracks = function({ indexItems }) {
  return (
    <div className='search__top-tracks'>
      <TrackList artistIsVisible indexItems={indexItems}/>
    </div>
  );
};

export default connect(
  mapStateToProps
)(TopTracks);
