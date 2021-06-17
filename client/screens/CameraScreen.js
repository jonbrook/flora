import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import CameraPreview from '../components/CameraPreview.js';
import { AntDesign, MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import styles from './cameraScreenStyles';

const CameraScreen = ({ history }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  // const [uploading, setUploading] = useState(false);

  const options = {
    quality: 0,
    base64: false,
  };

  let camera;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const takePicture = async () => {
    if (camera) {
      try {
        const picture = await camera.takePictureAsync(options);
        setPreviewVisible(true);
        setCapturedImage(picture);
      } catch (error) {
        console.log('Unable to take picture', error);
      }
    }
  };

  let openImagePickerAsync = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setCapturedImage(pickerResult);
    setPreviewVisible(true);
  };

  // If the retake button is clicked, previsibleState and capturedImageState are updated.
  // User can the retake a picture as camera screen is displayed
  const retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
  };

  //move this login to Camera Preview
  // const savePicture = (url) => {
  //   setPreviewVisible(false);
  //   console.log('savePicture', url);
  // };

  const onPressHandler = () => {
    history.push('/PlantListScreen');
  };

  return (
    <View style={styles.container}>
      {previewVisible && capturedImage ? (
        <CameraPreview
          picture={capturedImage}
          retakePicture={retakePicture}
          history={history}
        />
      ) : (
        <View style={styles.container}>
          <Camera
            ref={(reference) => {
              camera = reference;
            }}
            style={styles.camera}
            type={type}
          />
          <TouchableOpacity
            style={styles.cancelCameraButton}
            onPress={() => onPressHandler()}
          >
            <MaterialIcons name="cancel" size={40} color="white" />
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={openImagePickerAsync}>
              <AntDesign name="picture" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={takePicture}>
              <Entypo name="circle" size={80} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back,
                );
              }}
            >
              <Ionicons
                name="ios-camera-reverse-sharp"
                size={40}
                color="white"
              />
              {/* <FontAwesome name="camera" size={100} color="white" /> */}
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default CameraScreen;
