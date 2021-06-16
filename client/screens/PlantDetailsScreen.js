import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
  Text,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

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
                  { height: `50%` },
                ]}
              />
            </View>
            <View style={[styles.plantStatusBorder, styles.blueBorder]}>
              <View
                style={[
                  styles.plantStatusCurrent,
                  styles.blueStatus,
                  { height: `50%` },
                ]}
              />
            </View>
            <View style={[styles.plantStatusBorder, styles.brownBorder]}>
              <View
                style={[
                  styles.plantStatusCurrent,
                  styles.brownStatus,
                  { height: `20%` },
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#10360E',

    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
  },
  waterButton: {
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'rgb(153,187,255)',
    borderStyle: 'solid',
    borderColor: 'rgb(153,187,255)',
    borderWidth: 2,
    borderRadius: 35,

    height: Dimensions.get('screen').height * 0.08,
    width: Dimensions.get('screen').width * 0.7,

    alignSelf: 'center',
    top: 305,
  },
  sideBarNavigationContainer: {
    flex: 1,
    backgroundColor: '#10360E',
    width: Dimensions.get('screen').width * 0.12,
    height: Dimensions.get('screen').height,
  },
  backIcon: {
    position: 'absolute',
    bottom: 0,
  },
  plantDetailsContainer: {
    backgroundColor: 'rgba(16, 54, 14, 0.1)',
    position: 'absolute',
    top: 40,
    right: 38,
    width: Dimensions.get('screen').width * 0.8,
    height: Dimensions.get('screen').height * 0.83,
    borderRadius: 35,
  },
  imageContainer: {
    backgroundColor: 'pink',
    position: 'relative',
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    top: 55,
    alignSelf: 'center',
  },
  plantInfoContainer: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width * 0.7,
    height: 150,
    top: 360,
    alignSelf: 'center',
    borderRadius: 35,
  },
  plantStatusContainer: {
    justifyContent: 'space-between',
    height: '70%',
    width: '80%',
    top: 15,
    left: 20,
  },
  plantStatusBorder: {
    backgroundColor: 'transparent',
    width: 30,
    height: 27,
    borderWidth: 2,
    borderTopColor: 'transparent',
    justifyContent: 'flex-end',

    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    bottom: 30,
  },
  plantStatusCurrent: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    opacity: 0.3,
    bottom: 1,
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
  dataContainer: {
    right: 120,
    bottom: 40,
    justifyContent: 'space-evenly',
  },
  labelContainer: {
    right: 150,
    bottom: 35,
    justifyContent: 'space-evenly',
  },
  textEditing: {
    color: '#10360E',
    fontSize: 18,
    fontWeight: '200',
  },
  plantListItemScientificName: {
    top: 330,
    zIndex: 999,
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: '200',
    opacity: 0.4,
  },
  plantListItemCommonName: {
    color: '#10360E',
    top: 320,
    zIndex: 999,
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: '200',
    marginRight: 10,
  },
  waterButtonData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  waterButtonText: {
    fontSize: 30,
    fontWeight: '200',
  },
});
