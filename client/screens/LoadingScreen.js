import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#10360E',
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#10360E',
  },
  loadingScreenName: {
    color: 'white',

    fontSize: 70,
    fontWeight: '200',
  },
});
