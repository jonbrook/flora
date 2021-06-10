import React from 'react';
import { View } from 'react-native';
import LoadingScreen from './screens/LoadingScreen';
// import LoginScreen from './screens/LoginScreen';
// import RegisterScreen from './screens/RegisterScreen';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <LoadingScreen />
    </View>
  );
};

export default App;
