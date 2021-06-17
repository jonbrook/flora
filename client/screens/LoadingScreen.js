import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './loadingScreenStyles';

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingScreenName}>flora</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoadingScreen;
