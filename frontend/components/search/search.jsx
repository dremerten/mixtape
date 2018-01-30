import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import SearchNav from './SearchNav';

class Search extends React.Component {
  render() {
    return (
      <div className="search-wrapper">
        <div className="search-container">
          <SearchForm />
          <SearchNav isVisible />
        </div>
      </div>
    );
  }
}

export default Search;

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
