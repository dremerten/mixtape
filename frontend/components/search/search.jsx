import React from 'react';
import { connect } from 'react-redux';
import { foundResults } from '../../selectors/search_selectors';
import { Link, Redirect } from 'react-router-dom';
import SearchForm from './SearchForm';
import SearchNav from './SearchNav';
import SearchResults from './SearchResults';

const Search = function({ foundResults }) {
  return (
    <div className="search-wrapper">
      <div className="search-container">
        <SearchForm />
        { foundResults ?
          <Redirect to='/search/results'/>
          :
          <h2>No results found</h2>
        }
        <SearchResults />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  foundResults: foundResults(state)
});

export default connect(mapStateToProps)(Search);


// <div
//   className="results-container"
//   style={{display: (this.state.query && this.state.rendered) ? "" : "none"}}
//   >
//   <div className="top-results">
//     <div
//       className="top-result-image"
//       style={imageUrl}
//       ></div>
//     <div className="top-result-tracks">
//       {tracks}
//     </div>
//   </div>
// </div>
