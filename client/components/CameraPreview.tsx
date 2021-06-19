import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { useSubject } from '../hooks/useSubject';
import { addPlantsByUser } from '../ApiService';
import { plantsByUser$ } from '../behaviorSubjects';
import styles from './styles/cameraPreviewStyles';

const CameraPreview = ({ picture, retakePicture, history }) => {
  const [__, setUserPlants] = useSubject(plantsByUser$);

  const AddPictureHandler = async (uri, hist) => {
    await addPlantsByUser(setUserPlants, uri, hist);
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
