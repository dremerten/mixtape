import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ArtistHeader from './ArtistHeader';
import { fetchArtist } from '../../actions/artist_actions';
import Spinner from '../Spinner';

class ArtistPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loading != this.state.loading) {
      this.setState({ loading: !this.state.loading });
    }
  }

  render() {
    const { loading } = this.state;

    return(
      <div className='artist-page-container'>
        <div className='artist-page'>
          { loading ?
            <Spinner />
            :
            <ArtistHeader />
          }
          {/*<Switch>
            <Route path='/artists/:artistId/about' render={() => <h1>About!</h1>} />
            <Route path='/artists/:artistId/overview' render={() => <section>Main</section>}/>
          </Switch>*/}
          }
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.ui.loading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchArtist: id => dispatch(fetchArtist(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistPage));

// ArtistHeader
  // Buttons
  // ArtistNav
// ArtistPopularTracks
// ArtistAlbums
// ArtistSingles
