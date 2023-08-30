/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useContext } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { PhotoContextProvider } from './src/context/PhotoContext';
import PhotosScreen from './src/pages/PhotosScreen';

function App() {
  return (
    <PhotoContextProvider>
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <PhotosScreen />
      </SafeAreaView>
    </PhotoContextProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1
  }
});

export default App;
