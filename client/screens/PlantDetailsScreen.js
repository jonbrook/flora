import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';

import LoginForm from '../components/LoginForm';
import { Ionicons } from '@expo/vector-icons';

const PlantDetailsScreen = ({ history }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.sideBarNavigationContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            history.push('/PlantListScreen');
          }}
        >
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PlantDetailsScreen;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    position: 'relative',
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    backgroundColor: '#10360E',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  sideBarNavigationContainer: {
    flex: 1,
    width: Dimensions.get('screen').width * 0.3,
    height: Dimensions.get('screen').height,
  },
  backIcon: {
    position: 'absolute',
    bottom: 0,
  },
});
