import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';

import LoginForm from '../components/LoginForm';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginScreen = ({ history }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.loginScreenLogoContainer}>
        <MaterialCommunityIcons name="tree" size={100} color="white" />
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          history.push('/');
        }}
      >
        <Ionicons name="arrow-back-outline" size={30} color="white" />
      </TouchableOpacity>
      <LoginForm history={history} />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#10360E',
    position: 'relative',
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
  },
  loginContainer: {
    flex: 1,
  },
  backIcon: {
    position: 'absolute',
    bottom: 0,
  },
  loginScreenLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    height: Dimensions.get('screen').height * 0.4,
    width: Dimensions.get('screen').width,
  },
});
