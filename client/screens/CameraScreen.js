import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const cam = useRef().current;

  const _takePicture = async () => {
    const option = { quality: 0.5, base64: true, skipProcessing: false}
    const picture = await cam.takePictureAsyng(option);
    if (picture.source) console.log(picture.source);
  };
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
  return (
    <View style={styles.container}>
      <Camera ref={cam} style={styles.camera} type={type} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <AntDesign name="picture" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
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
          <Ionicons name="ios-camera-reverse-sharp" size={40} color="white" />
          {/* <FontAwesome name="camera" size={100} color="white" /> */}
        </TouchableOpacity>
      </View>
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
