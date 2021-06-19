import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import { Foundation } from '@expo/vector-icons';
import PlantDetailsScreen from '../screens/PlantDetailsScreen';
import {
  styles,
  soilHelper,
  waterHelper,
  sunlightHelper,
} from './styles/plantListItemStyles';
// const image = {
//   uri: 'https://jffrooftopfarm.co.za/wp-content/uploads/2020/06/Ficus-Elastica-Ruby.jpg',
// };

const PlantListItem = ({ plant, history }) => {
  const url = '../images/jade.jpg';
  console.log('plant uri: ', plant.uri);
  return (
    <TouchableOpacity
      onPress={() => {
        history.push('/PlantDetailsScreen');
      }}
    >
      <View style={styles.plantListItemContainer}>
        <View style={styles.plantListItemPictureContainer}>
          <Image source={require(url)} style={styles.plantListItemPicture} />
        </View>
        <View style={styles.plantListItemInfoContainer}>
          <TouchableOpacity style={styles.plantListItemTrashButton}>
            <Foundation
              name="trash"
              size={18}
              color="white"
              style={{ marginRight: 3, marginTop: 4 }}
            />
          </TouchableOpacity>
          <Text style={styles.plantListItemCommonName}>{plant.commonName}</Text>
          <Text style={styles.plantListItemScientificName}>
            {plant.scientificName}
          </Text>
          <View style={styles.plantStatusContainer}>
            <View style={[styles.plantStatusBorder, styles.blueBorder]}>
              <View
                style={[
                  styles.plantStatusCurrent,
                  styles.blueStatus,
                  { height: '50%' },
                ]}
              />
            </View>
            <View style={[styles.plantStatusBorder, styles.yellowBorder]}>
              <View
                style={[
                  styles.plantStatusCurrent,
                  styles.yellowStatus,
                  { height: `${sunlightHelper(plant.sunlightAmount)}` },
                ]}
              />
            </View>
            <View style={[styles.plantStatusBorder, styles.brownBorder]}>
              <View
                style={[
                  styles.plantStatusCurrent,
                  styles.brownStatus,
                  { height: `${soilHelper(plant.soilMoisture)}` },
                ]}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlantListItem;
