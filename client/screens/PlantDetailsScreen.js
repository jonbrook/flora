import React, { useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import styles from './styles/plantDetailScreenStyles';

const PlantDetailsScreen = ({ history, plant }) => {
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
            source={require('../images/jade.jpg')}
          />
        </View>
        <Text style={styles.plantListItemCommonName}>Jade Plant</Text>
        <Text style={styles.plantListItemScientificName}>Crassula ovata</Text>
        <View style={styles.plantInfoContainer}>
          <View style={styles.plantStatusContainer}>
            <View style={[styles.plantStatusBorder, styles.yellowBorder]}>
              <View
                style={[
                  styles.plantStatusCurrent,
                  styles.yellowStatus,
                  { height: '50%' },
                ]}
              />
            </View>
            <View style={[styles.plantStatusBorder, styles.blueBorder]}>
              <View
                style={[
                  styles.plantStatusCurrent,
                  styles.blueStatus,
                  { height: '50%' },
                ]}
              />
            </View>
            <View style={[styles.plantStatusBorder, styles.brownBorder]}>
              <View
                style={[
                  styles.plantStatusCurrent,
                  styles.brownStatus,
                  { height: '20%' },
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
            <Text style={styles.textEditing}>Partial{'\n'}Shade</Text>
            <Text style={styles.textEditing}>200 ml</Text>
            <Text style={styles.textEditing}>Dry</Text>
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
            <Text style={styles.waterButtonText}> {`${water}`} days</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PlantDetailsScreen;
