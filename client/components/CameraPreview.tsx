import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { addPlantsByUser } from '../ApiService';
import styles from './styles/cameraPreviewStyles';

const CameraPreview = ({
  picture,
  retakePicture,
  history,
}: {
  picture: any;
  retakePicture: any;
  history: any;
}) => {
  const AddPictureHandler = async (uri: any, hist: any) => {
    await addPlantsByUser(uri, hist);
  };

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
        onPress={() => AddPictureHandler(picture.uri, history)}
        style={styles.classifyPictureButton}
      >
        <Text style={styles.pictureButtonText}>Classify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraPreview;
