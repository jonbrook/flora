import React from 'react';
import { View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LandingScreen from './screens/LandingScreen';
import CameraScreen from './screens/CameraScreen';
import PlantListScreen from './screens/PlantListScreen';
import PlantDetailsScreen from './screens/PlantDetailsScreen';
require('./behaviorSubjects');
// import autoMLKey from './apiKeys/key.json';

// process.env.GOOGLE_APPLICATION_CREDENTIALS = autoMLKey;

import { NativeRouter, Switch, Route } from 'react-router-native';

const App = () => {
  return (
    <NativeRouter>
      <View style={{ flex: 1 }}>
        <Switch>
          <Route exact path="/" component={LandingScreen} />
          <Route exact path="/LoginScreen" component={LoginScreen} />
          <Route exact path="/RegisterScreen" component={RegisterScreen} />
          <Route exact path="/CameraScreen" component={CameraScreen} />
          <Route exact path="/PlantListScreen" component={PlantListScreen} />
          <Route
            exact
            path="/PlantDetailsScreen"
            component={PlantDetailsScreen}
          />
        </Switch>
      </View>
    </NativeRouter>
  );
};

export default App;
