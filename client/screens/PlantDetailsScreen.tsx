/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import { useHistory } from 'react-router-native';
import { Fontisto, Ionicons } from '@expo/vector-icons';
import styles from './styles/plantDetailScreenStyles';
import { soilHelper, sunlightHelper, waterHelper } from '../helpers/helpers';

const PlantDetailsScreen = () => {
  const history = useHistory<HistoryWithPlant>();
  const { plant } = history.location.state;

  const [water, setWatered] = useState(3);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            history.push('/PlantListScreen');
          }}
        >
          <Ionicons name="arrow-back-outline" size={40} color="white" />
        </TouchableOpacity>
        <View style={styles.plantDetailsContainer}>
          <Image
            style={styles.imageContainer}
            source={{ uri: plant.pictureURL }}
          />
        </View>
        <Text style={styles.plantListItemCommonName}>
          {plant.Plant.commonName}
        </Text>
        <Text style={styles.plantListItemScientificName}>
          {plant.Plant.scientificName}
        </Text>
        <View style={styles.plantInfoContainer}>
          <View style={styles.plantStatusContainer}>
            <View style={[styles.plantStatusBorder, styles.yellowBorder]}>
              <View
                style={[
                  styles.plantStatusCurrent,
                  styles.yellowStatus,
                  { height: `${sunlightHelper(plant.Plant.sunlightAmount)}` },
                ]}
              />
            </View>
            <View style={[styles.plantStatusBorder, styles.blueBorder]}>
              <View
                style={[
                  styles.plantStatusCurrent,
                  styles.blueStatus,
                  { height: `${waterHelper(plant.Plant.waterAmount)}` },
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
          <View style={styles.labelContainer}>
            <Text style={styles.textEditing}>Sunlight</Text>
            <Text style={styles.textEditing}>Water</Text>
            <Text style={styles.textEditing}>Soil Moisture</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.textEditing}>{plant.Plant.sunlightAmount}</Text>
            <Text style={styles.textEditing}>{plant.Plant.waterAmount}</Text>
            <Text style={styles.textEditing}>{plant.Plant.soilMoisture}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.waterButton}
          onPress={() => {
            setWatered(0);
          }}
        >
          <View style={styles.waterButtonData}>
            <Fontisto name="blood-drop" size={30} color="white" />
            <Text style={styles.waterButtonText}> {`${water} days`}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PlantDetailsScreen;
