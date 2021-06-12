import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { generateFirebaseUrl } from '../ApiService.js';

const CameraPreview = ({ picture, retakePicture, uploadImage }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: picture.uri }} style={styles.image} />
      <TouchableOpacity
        onPress={() => retakePicture()}
        style={styles.retakePictureButton}
      >
        <Text style={styles.pictureButtonText}>Retake</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => generateFirebaseUrl(picture.uri)}
        style={styles.classifyPictureButton}
      >
        <Text style={styles.pictureButtonText}>Classify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraPreview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  retakePictureButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    bottom: 50,
    left: 20,

    borderRadius: 35,
    height: Dimensions.get('screen').height * 0.1,
    width: Dimensions.get('screen').width * 0.4,
  },
  classifyPictureButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    bottom: 50,
    right: 20,

    borderRadius: 35,
    height: Dimensions.get('screen').height * 0.1,
    width: Dimensions.get('screen').width * 0.4,
  },
  pictureButtonText: {
    fontSize: 25,
    fontWeight: '200',
  },
});
