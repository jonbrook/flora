import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
const CameraPreview = ({ photo }) => {
  console.log('sdsfds', photo);
  return (
    <View style={styles.coontainer}>
      <ImageBackground
        source={{ uri: photo && photo.uri }}
        style={styles.imageBackground}
      />
    </View>
  );
};

export default CameraPreview;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imageBackground: {
    flex: 1,
  },
});
