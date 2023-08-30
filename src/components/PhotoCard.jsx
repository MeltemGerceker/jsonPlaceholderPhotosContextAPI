import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PhotoCard = ({ photo }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: photo.thumbnailUrl }} style={styles.thumbnail} />
            <View style={styles.textContainer}>
                <Text style={styles.textTitle}>{photo.title}</Text>
                <View style={styles.textAlbumContainer}>
                    <Text style={styles.textAlbum}>Album ID: {photo.albumId}</Text>
                </View>
            </View>

        </View>
    )
};

export default PhotoCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 20,
        padding: 10
    },
    thumbnail: {
        width: 150,
        height: 150
    },
    textContainer: {
        flex: 1,
    },
    textTitle: {
        fontSize: 18
    },
    textAlbumContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10
    },
    textAlbum: {
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: '#cdcdcd',
        marginVertical: 10,
        textAlign: 'center',
        padding: 5
    }
});