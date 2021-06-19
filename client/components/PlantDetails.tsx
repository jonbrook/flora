import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import styles from './styles/plantDetailsStyles';

const PlantDetails = ({ plant }) => {
  // { plant }
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
