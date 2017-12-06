import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NewPlaylistContainer from './featured_playlists/new_playlist';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formActive: false,
      isVisible: true
    };

    this.displayPlaylistForm = this.displayPlaylistForm.bind(this);
  }

  displayPlaylistForm() {
    this.setState({ formActive: true });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.scrollPosition > 60) {
      this.setState({ isVisible: false });
    } else if (!this.state.isVisible) {
      this.setState({ isVisible: true });
    }
  }

  render() {
    let display = { display: (this.state.isVisible) ? "" : "none" };
    let currentPath = this.props.props.match.url;

    if (currentPath.match(/collection/)) {
      return(
        <nav className="browse-nav-container" style={display}>
          <div className="browse-nav">
            <Link to="/collection/playlists"
              className={currentPath.match(/playlists/) ?
                "nav-link-item nav-selected" :
                "nav-link-item"}
                >
              <span>PLAYLISTS</span>
            </Link>
            <Link to="/collection/tracks"
              className={currentPath.match(/tracks/) ?
                "nav-link-item nav-selected" :
                "nav-link-item"}
                >
              <span>SONGS</span>
            </Link>
          </div>
          <button
            className='new-playlist'
            onClick={this.displayPlaylistForm}
            >
            NEW PLAYLIST
          </button>
          <NewPlaylistContainer active={this.state.formActive}/>
        </nav>
      );
    } else {
      return(
        <nav className="browse-nav-container" style={display}>
          <div className="browse-nav">
            <Link to="/browse/featured"
              className={currentPath.match(/featured/) ?
                "nav-link-item nav-selected" :
                "nav-link-item"}
                >
              <span>FEATURED</span>
            </Link>
            <Link to="#"
              className={currentPath.match(/genres/) ?
              "nav-link-item nav-selected" :
              "nav-link-item"}>
              <span>GENRES &amp; MOODS</span>
            </Link>
            <Link to="/browse/newreleases"
              className={currentPath.match(/newreleases/) ?
                "nav-link-item nav-selected" :
                "nav-link-item"}>
              <span>NEW RELEASES</span>
            </Link>
          </div>
        </nav>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  scrollPosition: state.ui.scrollPosition
});

export default connect(
  mapStateToProps
)(NavBar);
