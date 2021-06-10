import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import LoginForm from '../components/LoginForm';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LoginForm />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'yellow',
    flex: 1,
  },
});
