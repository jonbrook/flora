import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

import RegisterForm from '../components/RegisterForm';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = ({ history }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity
        onPress={() => {
          history.push('/');
        }}
      >
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <RegisterForm history={history} />
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
