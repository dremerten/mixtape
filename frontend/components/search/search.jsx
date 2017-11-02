import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '' }
  }

  componentDidMount() {
    // this.props.fetchAll()
  }

  render() {
    return (
     <h1>Search</h1>
    );
  }
}

export default Search
