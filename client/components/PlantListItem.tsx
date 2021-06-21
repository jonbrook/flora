import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import { Foundation } from '@expo/vector-icons';
import { styles } from './styles/plantListItemStyles';

const PlantListItem = ({
  plant,
  history,
}: {
  plant: PlantsByUser;
  history: any;
}) => {
  const soilHelper = (soilMoisture: string) => {
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

  // TODO: impliment waterHelper
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const waterHelper = (lastWatered: number) => {
    let currentWaterStatus = (Date.now() - lastWatered) / lastWatered;
    // (Date.now - lastWatered) / (60 * 60 * 24 * 1000);
    return `${currentWaterStatus}%`;
  };

  const sunlightHelper = (sunlight: string) => {
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

  return (
    <TouchableOpacity
      onPress={() => {
        history.push('/PlantDetailsScreen');
      }}
    >
      <View style={styles.plantListItemContainer}>
        <View style={styles.plantListItemPictureContainer}>
          <Image
            source={{ uri: plant.pictureURL }}
            style={styles.plantListItemPicture}
          />
        </View>
        <View style={styles.plantListItemInfoContainer}>
          <TouchableOpacity style={styles.plantListItemTrashButton}>
            <Foundation
              name="trash"
              size={18}
              color="white"
              style={styles.plantListItemTrashButtonIcon}
            />
          </TouchableOpacity>
          <Text style={styles.plantListItemCommonName}>
            {plant.Plant.commonName}
          </Text>
          <Text
            testID="scientificName"
            style={styles.plantListItemScientificName}
          >
            {plant.Plant.scientificName}
          </Text>
          <View style={styles.plantStatusContainer}>
            <View style={[styles.plantStatusBorder, styles.blueBorder]}>
              <View
                style={[
                  styles.plantStatusCurrent,
                  styles.blueStatus,
                  styles.height50,
                ]}
              />
            </View>
            <View style={[styles.plantStatusBorder, styles.yellowBorder]}>
              <View
                style={[
                  styles.plantStatusCurrent,
                  styles.yellowStatus,
                  { height: `${sunlightHelper(plant.Plant.sunlightAmount)}` },
                ]}
              />
            </View>
            <View style={[styles.plantStatusBorder, styles.brownBorder]}>
              <View
                style={[
                  styles.plantStatusCurrent,
                  styles.brownStatus,
                  { height: `${soilHelper(plant.Plant.soilMoisture)}` },
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
