import React from 'react';
import { connect } from 'react-redux';
import { foundResults } from '../../selectors/search_selectors';
import { Route, Redirect } from 'react-router-dom';
import SearchForm from './SearchForm';
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
        <Route path='/search/:page' component={SearchResults} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  foundResults: foundResults(state)
});

export default connect(mapStateToProps)(Search);
