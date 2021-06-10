import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

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
      <Camera style={styles.camera} type={type}></Camera>
      <View style={styles.buttonContainer}>
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
          <Ionicons name="ios-camera-reverse-sharp" size={100} color="white" />
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
    height: Dimensions.get('screen').height * 0.8,
  },
  buttonContainer: {
    backgroundColor: '#10360E',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    height: Dimensions.get('screen').height * 0.25,
    width: Dimensions.get('screen').width,
    position: 'absolute',
    bottom: 0,
  },
  button: {
  }
});
