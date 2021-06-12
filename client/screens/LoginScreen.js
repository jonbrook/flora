import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import LoginForm from '../components/LoginForm';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ history }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity
        onPress={() => {
          history.push('/');
        }}
      >
        <Ionicons name="arrow-back-outline" size={50} color="white" />
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
  loginContainer: {
    flex: 1,
  },
  backIcon: {
    position: 'absolute',
    bottom: 0,
  },
});
