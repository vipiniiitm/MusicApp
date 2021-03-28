import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

export class songDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song: {}
        };
    }
    componentDidMount() {
        console.log(this.props.route.params);
        this.setState({ song: this.props.route.params.song })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.heading} > Artist Name :- </Text>
                    <Text style={styles.name}>{this.state.song.artistName}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.heading}> Collection ArtistName  :- </Text>
                    <Text style={styles.name}>{this.state.song.collectionArtistName}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.heading}> Collection Name  :- </Text>
                    <Text style={styles.name}>{this.state.song.collectionName}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.heading}> CollectionPrice  :- </Text>
                    <Text style={styles.name}>{this.state.song.collectionPrice}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.heading}> country  :- </Text>
                    <Text style={styles.name}>{this.state.song.country}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.heading}> Primary GenreName  :- </Text>
                    <Text style={styles.name}>{this.state.song.primaryGenreName}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.heading}>Track Censored Name  :- </Text>
                    <Text style={styles.name}>{this.state.song.trackCensoredName}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.heading}>TrackCount:- </Text>
                    <Text style={styles.name}>{this.state.song.trackCount}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.heading} style={styles.heading}>TrackName:- </Text>
                    <Text style={styles.name}>{this.state.song.trackName}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.heading}>Track Number:- </Text>
                    <Text style={styles.name}>{this.state.song.trackNumber}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.heading}>Track ViewUrl:- </Text>
                    <Text style={styles.name}>{this.state.song.trackViewUrl}</Text>
                </View>

            </ScrollView>
        )
    }
}

export default songDetails
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    },
    card: {
        flexDirection: 'row',
        borderColor: "#0000ff",
        borderWidth: 0.5,
        margin: 2,
        padding: 3

    },
    name: {
        color: "#0000ff",
    },
    heading: {
        color: "#0000ff",
        fontWeight: 'bold'
    }
})