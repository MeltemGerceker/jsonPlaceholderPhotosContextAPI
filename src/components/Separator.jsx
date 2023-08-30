import { View, StyleSheet } from 'react-native';

const Separator = () => {
    return (
        <View style={styles.container} />
    )
};

export default Separator;

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#a9a9a9'
    }
});