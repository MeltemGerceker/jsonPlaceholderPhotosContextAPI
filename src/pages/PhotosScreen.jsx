import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import actionTypes from '../context/actions/actionTypes';
import PhotoCard from '../components/PhotoCard';
import Separator from '../components/Separator';
import Loading from '../components/Loading';
import EmptyList from '../components/EmptyList';
import { PhotoContext } from '../context/PhotoContext';

const PhotosScreen = () => {
    const [ state, dispatch ] = useContext(PhotoContext);
    const { photos, isLoading} = state;

    useEffect(() => {
        dispatch({
            type: actionTypes.CLEAR_PHOTOS
        });
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => dispatch({
                type: actionTypes.SET_PHOTOS,
                payload: response.data
            }))
            .catch((error) => console.log(error));
    }, []);

    return (
        <View>
            <Text style={styles.textTitle}>PHOTOS</Text>
            {isLoading ? (<Loading />) :
                (<FlatList
                    data={photos}
                    renderItem={({item}) => <PhotoCard photo={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={<Separator />}
                    ListEmptyComponent={<EmptyList />}
                />)
            }
        </View>
    )
};

export default PhotosScreen;

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 22,
        letterSpacing: 10,
        fontWeight: '700',
        textAlign: 'center',
        marginVertical: 20
    }
});