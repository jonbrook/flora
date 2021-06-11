import React from 'react';
import { View } from 'react-native';
// import LoadingScreen from './screens/LoadingScreen';
// import LoginScreen from './screens/LoginScreen';
// import RegisterScreen from './screens/RegisterScreen';
import CameraScreen from './screens/CameraScreen';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <CameraScreen />
    </View>
  );
};

export default App;
