import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import {
    SafeAreaProvider
} from 'react-native-safe-area-context';

export class songList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            isLoading: false
        };
    }
    componentDidMount() {
        this.getSongs();
    }

    getSongs = () => {
        this.setState({ isLoading: true })
        fetch('https://itunes.apple.com/search?term=Michael+jackson')
            .then(response => response.json())
            .then(data => {
                console.log('song-data==>', data.results)
                this.setState({
                    songs: data.results,
                    isLoading: false
                })
            }
            )
    }
    millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    viewDetails = (song) => {
        console.log('song==>', song)
        this.props.navigation.navigate('SongDetails', {
            song: song
        })
    }
    render() {
        return (
            <SafeAreaProvider>
                {this.state.isLoading ?
                    <View style={styles.loader}>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Text style={styles.lodertext}>Please wait</Text>
                    </View>
                    :
                    <ScrollView>
                        {this.state.songs.map((song, i) => {
                            return (
                                <TouchableOpacity key={i} style={styles.card} onPress={() => { this.viewDetails(song) }}>
                                    <View>
                                        <Image
                                            style={styles.image}
                                            source={{
                                                uri: 'https://reactnative.dev/img/tiny_logo.png',
                                            }}
                                        />
                                    </View>
                                    <View style={styles.trackName}>
                                        <Text style={styles.name}>{song.trackName}</Text>
                                        <View style={styles.cardFooter}>
                                            <Text style={styles.artistName}>{song.artistName}</Text>
                                            <Text style={styles.time}>{this.millisToMinutesAndSeconds(song.trackTimeMillis)}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                }
            </SafeAreaProvider>
        )
    }
}

export default songList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    },

    card: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 10,
        marginVertical: 10
    },
    image: {
        height: 100,
        width: 100
    },
    trackName: {
        padding: 10,
        color: "#0000ff"
    },
    artistName: {
        fontWeight: 'bold',
        fontSize: 12,
        color: "#0000ff"
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    time: {
        fontSize: 12,
        marginLeft: 20,
        color: "#0000ff"
    },
    loader: {
        marginTop: 100
    },
    lodertext: {
        color: "#0000ff"
    },
    name: {
        color: "#0000ff", textOverflow: 'ellipsis'
    }
});
