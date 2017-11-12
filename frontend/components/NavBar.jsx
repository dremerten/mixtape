import React from 'react';
import { Link } from 'react-router-dom';
import NewPlaylistContainer from './featured_playlists/new_playlist';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formActive: false,
      isVisible: true
    };

    this.displayPlaylistForm = this.displayPlaylistForm.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  displayPlaylistForm() {
    this.setState({ formActive: true })
  }

  componentDidMount() {
    this.getScrollableElement().addEventListener(
      'scroll', () => this.handleScroll()
    );
  }

  getScrollableElement() {
    return document.getElementById('music-items');
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isNavVisible != this.props.isNavVisible) {
      this.setState({ show: !show })
    }
  }

  handleScroll() {
    let pos = this.getScrollableElement().scrollTop


    if (pos > 64) {
      this.setState({ isVisible: false })
    } else if (!this.state.isVisible) {
      this.setState({ isVisible: true })
    }

  }

  render() {
    let display = { display: (this.state.isVisible) ? "" : "none" }
    
    if (this.props.props.match.path.match(/collection/)) {
      return(
        <nav className="browse-nav-container" style={display}>
          <div className="browse-nav">
            <Link to="/collection/playlists" className="nav-link-item">PLAYLISTS</Link>
            <Link to="/collection/tracks" className="nav-link-item">SONGS</Link>
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
            <Link to="/browse/featured" className="nav-link-item">FEATURED</Link>
            <Link to="/browse/genres" className="nav-link-item">GENRES &amp; MOODS</Link>
            <Link to="/browse/newreleases" className="nav-link-item">NEW RELEASES</Link>
          </div>
        </nav>
      );
    }
  }
}

export default NavBar;
