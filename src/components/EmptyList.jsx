import { StyleSheet, Text, View } from 'react-native';

const EmptyList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>There are no photos in this list :(</Text>
        </View>
    )
};

export default EmptyList;

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