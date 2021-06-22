import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { useHistory } from 'react-router-native';
import LoginForm from '../components/LoginForm';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/loginScreenStyles';

const LoginScreen = () => {
  const history = useHistory();

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
      <LoginForm />
    </SafeAreaView>
  );
};

export default LoginScreen;
