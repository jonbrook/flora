import React from 'react';
import {
  SafeAreaView, Text, View, TouchableOpacity,
} from 'react-native';
import { useHistory } from 'react-router-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/landingScreenStyles';

const LandingScreen = () => {
  const history = useHistory();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.LandingScreenContainer}>
        <View style={styles.landingScreenLogoContainer}>
          <MaterialCommunityIcons name="tree" size={100} color="white" />
          <Text style={styles.landingScreenName}>flora</Text>
        </View>
        <View style={styles.landingScreenButtonContainer}>
          <TouchableOpacity
            style={styles.landingScreenLoginButton}
            onPress={() => {
              history.push('/LoginScreen');
            }}
          >
            <Text style={styles.landingScreenLoginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.landingScreenRegisterButton}
            onPress={() => {
              history.push('/RegisterScreen');
            }}
          >
            <Text style={styles.landingScreenRegisterButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;
