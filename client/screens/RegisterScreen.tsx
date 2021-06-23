import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { useHistory } from 'react-router-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import RegisterForm from '../components/RegisterForm';
import styles from './styles/registerScreenStyles';

const RegisterScreen = () => {
  const history = useHistory();

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          history.push('/');
        }}
      >
        <Ionicons name="arrow-back-outline" size={30} color="white" />
      </TouchableOpacity>
      <View style={styles.registerScreenLogoContainer}>
        <MaterialCommunityIcons name="tree" size={70} color="white" />
      </View>
      <RegisterForm />
    </SafeAreaView>
  );
};

export default RegisterScreen;
