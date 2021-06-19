import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';

import LoginForm from '../components/LoginForm';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/loginScreenStyles';

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
