import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';

import PlantDetails from '../components/PlantDetails';
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
          <Ionicons name="arrow-back-outline" size={40} color="white" />
        </TouchableOpacity>
        {/* <PlantDetails /> */}
      </View>
    </SafeAreaView>
  );
};

export default PlantDetailsScreen;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#10360E',
    position: 'relative',
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width * 0.12,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    backgroundColor: '#10360E',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideBarNavigationContainer: {
    flex: 1,
    backgroundColor: '#10360E',
    width: Dimensions.get('screen').width * 0.12,
    height: Dimensions.get('screen').height,
  },
  backIcon: {
    position: 'absolute',
    bottom: 0,
  },
});
