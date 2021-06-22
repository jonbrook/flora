import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useHistory } from 'react-router-native';
import { Foundation } from '@expo/vector-icons';
import { styles } from './styles/plantListItemStyles';
import { soilHelper, sunlightHelper, waterHelper } from '../helpers/helpers';

const PlantListItem = ({ plant }: { plant: PlantsByUser }) => {
  const history = useHistory();

  return (
    <TouchableOpacity
      onPress={() => {
        history.push({ pathname: '/PlantDetailsScreen', state: { plant } });
      }}
    >
      <View style={styles.plantListItemContainer}>
        <View style={styles.plantListItemPictureContainer}>
          <Image
            testID="image"
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
          <Text style={styles.plantListItemScientificName}>
            {plant.Plant.scientificName}
          </Text>
          <View style={styles.plantStatusContainer}>
            <View style={[styles.plantStatusBorder, styles.blueBorder]}>
              <View
                style={[
                  styles.plantStatusCurrent,
                  styles.blueStatus,
                  { height: `${waterHelper(plant.Plant.waterAmount)}` },
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
