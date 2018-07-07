import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {    
    state = { albums: [] };

    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => response.json())
            .then(json => this.setState({ albums: json }));        
    }

    renderAlbums() {   
        return this.state.albums.map(album => <Text>{album.title}</Text>);                     
    }

    render() {
        return (
            <View>
              {this.renderAlbums()}
            </View>
      );
    }
}

export default AlbumList;
