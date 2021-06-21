import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';

import RegisterForm from '../components/RegisterForm';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/registerScreenStyles';

const RegisterScreen = ({ history }) => {
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
      <RegisterForm history={history} />
    </SafeAreaView>
  );
};

export default RegisterScreen;
