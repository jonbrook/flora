import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

import { Foundation } from '@expo/vector-icons';
import PlantDetailsScreen from '../screens/PlantDetailsScreen';
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

const styles = StyleSheet.create({
  plantListItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(16, 54, 14, 0.1)',
    height: 150,
    width: Dimensions.get('screen').width * 0.9,
    borderRadius: 35,
    marginBottom: 20,
  },
  plantListItemPictureContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '37%',
  },
  plantListItemPicture: {
    backgroundColor: 'pink',

    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  plantListItemInfoContainer: {
    flexDirection: 'column',

    justifyContent: 'flex-start',
    alignItems: 'center',

    height: '100%',
    width: '63%',
  },
  plantListItemTrashButton: {
    backgroundColor: '#10360E',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: 30,
    width: 36,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 0,
    marginBottom: 5,
  },
  plantListItemScientificName: {
    fontWeight: '200',
    opacity: 0.4,
  },
  plantListItemCommonName: {
    fontSize: 25,
    fontWeight: '200',
    marginRight: 10,
  },
  plantStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '40%',
    width: '80%',
  },
  plantStatusBorder: {
    backgroundColor: 'transparent',
    width: 30,
    height: 27,
    borderWidth: 2,
    borderTopColor: 'transparent',
    justifyContent: 'flex-end',

    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  plantStatusCurrent: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    opacity: 0.3,
  },
  blueBorder: {
    borderColor: '#040EF5',
  },
  blueStatus: {
    backgroundColor: '#040EF5',
  },
  yellowBorder: {
    borderColor: '#F4BA26',
  },
  yellowStatus: {
    backgroundColor: '#F4BA26',
  },
  brownBorder: {
    borderColor: '#A52A2A',
  },
  brownStatus: {
    backgroundColor: '#A52A2A',
  },
});

const soilHelper = (soilMoisture) => {
  switch (soilMoisture) {
    case 'dry':
      return '20%';
    case 'slighty dry':
      return '40%';
    case 'nearly dry':
      return '60%';
    case 'never dry':
      return '90%';
    default:
      return '100%';
  }
};
const waterHelper = (lastWatered) => {
  let currentWaterStatus = (Date.now - lastWatered) / lastWatered;
  // (Date.now - lastWatered) / (60 * 60 * 24 * 1000);
  return `${currentWaterStatus}%`;
};
const sunlightHelper = (sunlight) => {
  switch (sunlight) {
    case 'part shade to full shade':
      return '30%';
    case 'part shade':
      return '50%';
    case 'part sun to part shade':
      return '70%';
    case 'full sun to part shade':
      return '90%';
    default:
      return '100%';
  }
};
