import React from 'react';
import { connect } from 'react-redux';
import { foundResults } from '../../selectors/search_selectors';
import { Route, Link, Redirect } from 'react-router-dom';
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
          null
        }
        <SearchResults foundResults={foundResults} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  foundResults: foundResults(state)
});

export default connect(mapStateToProps)(Search);
