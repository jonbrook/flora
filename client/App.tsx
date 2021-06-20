import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import { Provider } from 'react-redux';
import store from './store/store';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LandingScreen from './screens/LandingScreen';
import CameraScreen from './screens/CameraScreen';
import PlantListScreen from './screens/PlantListScreen';
import PlantDetailsScreen from './screens/PlantDetailsScreen';
require('./behaviorSubjects');

const App = () => {
  return (
    <NativeRouter>
      <Provider store={store}>
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
      </Provider>
    </NativeRouter>
  );
};

export default App;
