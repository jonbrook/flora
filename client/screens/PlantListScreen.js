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
import { useSubject } from '../hooks/useSubject';
import { plants$, plantsByUser$ } from '../behaviorSubjects.js';

const PlantListScreen = ({ history }) => {
  const [plants] = useSubject(plants$);
  const [plantsByUser] = useSubject(plantsByUser$);

  const plantsList = plants.filter((plant) => {
    for (let userPlant of plantsByUser) {
      if (userPlant.scientificName === plant.scientificName) return true;
    }
  });
  console.log('plantsList: ', plantsList);

  const plantsListWithUrl = plantsList.map((plant) => {
    for (let userPlant of plantsByUser) {
      if ((userPlant.scientificName = plant.scientificName)) {
        console.log('plant uri:', userPlant.scientificName);
        return { ...plant, uri: userPlant.pictureURL };
      }
    }
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.contentContainer}>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>flora</Text>
        </View>
        <FlatList
          data={plantsListWithUrl}
          renderItem={({ item }) => (
            <PlantListItem plant={item} history={history} />
          )}
          keyExtractor={(item) => item.id.toString()}
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
