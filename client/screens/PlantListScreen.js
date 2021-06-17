import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import PlantListItem from '../components/PlantListItem';
import { useSubject } from '../hooks/useSubject';
import { plants$, plantsByUser$ } from '../behaviorSubjects.js';
import styles from './plantListScreenStyles';

const PlantListScreen = ({ history }) => {
  const [plants] = useSubject(plants$);
  const [plantsByUser] = useSubject(plantsByUser$);

  const plantsList = plants.filter((plant) => {
    for (let userPlant of plantsByUser) {
      if (userPlant.scientificName === plant.scientificName) {
        return true;
      }
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
