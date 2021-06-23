import React from 'react';
import {
  View, ImageBackground, Text, TouchableOpacity,
} from 'react-native';
import { useHistory } from 'react-router-native';
import { addPlantsByUser } from '../ApiService';
import styles from './styles/cameraPreviewStyles';

const CameraPreview = ({
  picture,
  retakePicture,
}: {
  picture: any;
  retakePicture: any;
}) => {
  const history = useHistory();

  const AddPictureHandler = async (uri: any) => {
    await addPlantsByUser(uri, history);
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
        onPress={() => AddPictureHandler(picture.uri)}
        style={styles.classifyPictureButton}
      >
        <Text style={styles.pictureButtonText}>Classify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraPreview;
