import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles/plantDetailsStyles';

const PlantDetails = () => {
  return (
    <View style={styles.plantCard}>
      {/* {console.log(plant)} */}
      <Text>HelloWorld</Text>
      {/* <Text>{plant.scientificName}</Text>
      <View style={styles.plantPictureContainer}>
        <View style={styles.plantPictureDetails} />
      </View>
      <View style={styles.plantInfoContainer}>
        <Text>{plant.scientificName}</Text>
        <Text></Text>
      </View> */}
    </View>
  );
};

export default PlantDetails;
