import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './styles/loadingScreenStyles';

const LoadingScreen = () => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingScreenName}>flora</Text>
    </View>
  </SafeAreaView>
);

export default LoadingScreen;
