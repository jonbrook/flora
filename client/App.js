import React from 'react';
import { View } from 'react-native';
// import LoadingScreen from './screens/LoadingScreen';
// import LoginScreen from './screens/LoginScreen';
// import RegisterScreen from './screens/RegisterScreen';
import PlantListScreen from './screens/PlantListScreen';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <PlantListScreen />
    </View>
  );
};

export default App;
