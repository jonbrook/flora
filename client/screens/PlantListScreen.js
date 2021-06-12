import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import PlantListItem from '../components/PlantListItem';

const PlantListScreen = ({ history }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.contentContainer}>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>flora</Text>
        </View>
        <FlatList
          data={PLANTS}
          renderItem={({ item }) => (
            <PlantListItem plant={item} history={history} />
          )}
          keyExtractor={(item) => item.id}
          style={{ paddingVertical: 20 }}
        />
        <TouchableOpacity
          style={styles.addPlantButton}
          onPress={() => history.push('/CameraScreen')}
        >
          <AntDesign name="plus" size={35} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PlantListScreen;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#10360E',
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  contentContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#10360E',
    width: Dimensions.get('screen').width,
  },
  navbarTitle: {
    color: 'white',
    fontSize: 45,
    fontWeight: '200',
  },
  addPlantButton: {
    backgroundColor: '#10360E',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    bottom: 50,

    borderRadius: 35,
    height: Dimensions.get('screen').height * 0.1,
    width: Dimensions.get('screen').width * 0.4,
  },
});
