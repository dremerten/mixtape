import React from 'react';
import { Link } from 'react-router-dom';
import Track from '../tracks/track';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      resultHeaders: [],
      topResults: props.topResults,
      tracks: props.tracks,
      albums: props.albums,
      playlists: props.playlists,
      rendered: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.triggerFetch = this.triggerFetch.bind(this);
    this.trigger = null;
  }

  triggerFetch() {
    let { query } = this.state
    clearTimeout(this.trigger);

    this.trigger = setTimeout(() => {
      this.props.fetchResults({ query })
    }, 200)
  }

  componentDidMount() {
    this.setState({ rendered: true })
  }

  componentWillReceiveProps({ topResults, artists, tracks, albums, playlists}) {
    this.setState({
      topResults,
      artists,
      tracks,
      albums,
      playlists
    });
  }

  handleChange(e) {
    this.setState({ query: e.target.value }, () => (
      this.triggerFetch()
    ));
  }


  render() {
    let topResults, artists, tracks, albums, playlists, imageUrl;

    if (this.state.topResults.length) {
      topResults = this.state.topResults.map(track => (
        <Track props={this.props} track={track} key={track.id}/>
      ));
      imageUrl = { backgroundImage: 'url(' + this.state.topResults[0].imageUrl + ')' };
    }
    // if (this.state.artists.length) {
    //   artists = this.state.artists;
    // }

    if (this.state.tracks.length) {
      tracks = this.state.tracks.map(track => (
        <Track { ...this.props} track={track} key={track.id}/>
      ));
    }

    if (this.state.albums.length) {
      albums = this.state.albums;
    }


    return (
     <div className="search-wrapper">
       <div className="search-container">
         <div className="search-input-container">
           <div className="input-heading-wrapper">
             <span className="input-header">Search for an Artist, Song, Album or Playlist</span>
           </div>
           <input
             className="search-input-field"
             onChange={this.handleChange}
             placeholder="Start typing..."
             type="text"
             value={this.state.query}
             ></input>
         </div>
         <div
           className="results-container"
           style={{display: (this.state.query && this.state.rendered) ? "" : "none"}}
           >
           <div className="top-results">
             <div
               className="top-result-image"
               style={imageUrl}
               ></div>
             <div className="top-result-tracks">
               {tracks}
             </div>
           </div>
         </div>
       </div>
     </div>
    );
  }
}

export default Search;
