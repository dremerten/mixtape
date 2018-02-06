import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserHeader from './UserHeader';

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.itemId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loading !== this.state.loading) {
      this.setState({ loading: !this.state.loading });
    } else if (this.props.itemId !== newProps.itemId) {
      this.setState({ loading: true }, () =>
        this.props.fetchUser(newProps.itemId)
      );
    }
  }

  render() {
    const { loading } = this.state;

    if (loading) return null;

    return(
      <div className='artist-page-container'>
        <div className='artist-page'>
          <UserHeader />
        </div>
      </div>
    );
  }
}

//UserHeader
//UserFollowButton
//UserDropdown
//UserNav
//Route 'users/:id/playlists'
//PublicPlaylists
//Route users/:id/followers
//UserFollowers
//Route users/:id/following
//UserFollowing

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.ui.loading.global,
    itemId: ownProps.match.params.userId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage));
