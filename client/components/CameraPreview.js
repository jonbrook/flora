import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const CameraPreview = ({ photo, retakePicture, savePicture }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: `${photo.uri}` }} style={styles.image} />
      <TouchableOpacity
        onPress={() => retakePicture()}
        style={styles.retakePhotoButton}
      >
        <Text style={styles.photoButtonText}>Retake</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => savePicture()}
        style={styles.classifyPhotoButton}
      >
        <Text style={styles.photoButtonText}>Classify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraPreview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  retakePhotoButton: {
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
  classifyPhotoButton: {
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
  photoButtonText: {
    fontSize: 25,
    fontWeight: '200',
  },
});
