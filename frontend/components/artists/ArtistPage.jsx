import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ArtistHeader from './ArtistHeader';
import ArtistDescription from './ArtistDescription';
import { fetchArtist } from '../../actions/artist_actions';
import Spinner from '../Spinner';
import TopArtistTracks from './TopArtistTracks';
import ArtistItems from './ArtistItems';

class ArtistPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.itemId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loading != this.state.loading) {
      this.setState({ loading: !this.state.loading });
    } else if (this.props.itemId !== newProps.itemId) {
      this.setState({ loading: true }, () =>
        this.props.fetchArtist(newProps.itemId)
      );
    }
  }

  render() {
    const { loading } = this.state;

    return(
      <div className='artist-page-container'>
        { loading ?
          <Spinner />
          :
          <div className='artist-page'>
            <ArtistHeader />
            <Switch>
              <Route path='/view/artists/:artistId/about' component={ArtistDescription} />
              <Route path='/view/artists/:artistId/overview' component={ArtistItems} />
            </Switch>
          </div>
        }
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.ui.loading.global,
    itemId: ownProps.match.params.artistId
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
