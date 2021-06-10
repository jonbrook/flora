import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import RegisterForm from '../components/RegisterForm';

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <RegisterForm />
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#10360E',
    flex: 1,
  },
});
