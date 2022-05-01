import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {
          name: 'name1',
          artist: 'artist1',
          album: 'album1',
          id: 1
        },
        {
          name: 'name2',
          artist: 'artist2',
          album: 'album2',
          id: 2
        },
        {
          name: 'name3',
          artist: 'artist3',
          album: 'album3',
          id: 3
        }
      ],
      playlistName: 'playlistName1',
      playlistTracks: [
        {
          name: 'playlistName1',
          artist: 'playlistArtist1',
          album: 'playlistAlbum1',
          id: 4
        },
        {
          name: 'playlistName2',
          artist: 'playlistArtist2',
          album: 'playlistAlbum2',
          id: 5
        }
      ]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let curTracks = this.state.playlistTracks;

    if (curTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    curTracks.push(track);
    this.setState({playlistTracks: curTracks});
  }

  removeTrack(track) {
    let curTracks = this.state.playlistTracks;

    curTracks = curTracks.filter(savedTrack => savedTrack.id !== track.id);

    this.setState({playlistTracks: curTracks});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;