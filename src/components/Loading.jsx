import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Loading = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Loading...</Text>
        </View>
    )
};

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200,
    },
    textTitle: {
        fontSize: 18,
        fontWeight: '600'
    }
});