import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ArtistHeader from './ArtistHeader';
import ArtistDescription from './ArtistDescription';
import { fetchArtist } from '../../actions/artist_actions';
import Spinner from '../Spinner';
import TopArtistTracks from './TopArtistTracks';

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
            <div>
            <ArtistHeader />
              <Switch>
                <Route path='/artists/:artistId/about' component={ArtistDescription} />
                <Route path='/artists/:artistId/overview' component={TopArtistTracks} />
              </Switch>
            </div>
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
