import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import CameraPreview from '../components/CameraPreview.js';
import * as firebase from 'firebase';
import firebaseConfig from '../apiKeys/firebase.config.js';

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import apiService from '../ApiService.js';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
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
    try {
      let permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync(options);

      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }
    } catch (error) {
      console.log('Unable to access camera role', error);
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    setCapturedImage(pickerResult);
    setPreviewVisible(true);
  };

  const retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
  };

  //move this login to Camera Preview
  const savePicture = (url) => {
    setPreviewVisible(false);
    console.log('savePicture', url);
  };

  // Move this logic to API service
  const uploadImageAsync = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });

    const ref = firebase.storage().ref().child(new Date().toISOString());
    const snapshot = await ref.put(blob);

    // We're done with the blob, close and release it
    blob.close();

    const url = await snapshot.ref.getDownloadURL();
    savePicture(url);
  };

  return (
    <View style={styles.container}>
      {previewVisible && capturedImage ? (
        <CameraPreview
          picture={capturedImage}
          retakePicture={retakePicture}
          uploadImage={uploadImageAsync}
        />
      ) : (
        <View style={styles.container}>
          <Camera
            ref={(r) => {
              camera = r;
            }}
            style={styles.camera}
            type={type}
          />
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

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#10360E',
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  container: {
    flex: 1,
  },
  camera: {
    height: Dimensions.get('window').height,
  },
  buttonContainer: {
    backgroundColor: 'rgba(16, 54, 14, 0.7)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    height: Dimensions.get('screen').height * 0.18,
    width: Dimensions.get('screen').width,
    position: 'absolute',
    bottom: 0,
  },
  button: {},
});
