import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

const PlantDetails = ({ plant }) => {
  return (
    <View style={styles.plantCard}>
      <Text>{plant.scientificName}</Text>
      <View style={styles.plantPictureContainer}>
        <View style={styles.plantPictureDetails} />
      </View>
      <View style={styles.plantInfoContainer}>
        <Text>{plant.scientificName}</Text>
        <Text></Text>
      </View>
    </View>
  );
};

export default PlantDetails;

const styles = StyleSheet.create({
  plantCard: {
    backgroundColor: 'yellow',
    height: '50%',
    width: '75%',
    position: 'absolute',
    right: 25,
    bottom: 220,
  },
  plantPictureContainer: {
    backgroundColor: '#10360E',

    flex: 1,
    alignItems: 'center',
  },
  // loginFormLogoContainer: {
  //   backgroundColor: 'pink',

  //   justifyContent: 'center',
  //   alignItems: 'center',

  //   height: Dimensions.get('screen').height * 0.5,
  //   width: Dimensions.get('screen').width * 0.9,
  // },
  // loginFormInputContainer: {
  //   backgroundColor: 'blue',
  //   justifyContent: 'center',

  //   height: Dimensions.get('screen').height * 0.33,
  //   width: Dimensions.get('screen').width * 0.9,
  // },
  // loginFormInputTextLabel: {
  //   color: 'white',
  //   fontSize: 23,
  //   fontWeight: '200',
  // },
  // loginFormInputTextValue: {
  //   // backgroundColor: 'red',
  //   color: 'white',
  //   fontSize: 30,
  //   fontWeight: '200',

  //   justifyContent: 'center',

  //   borderBottomColor: 'white',
  //   borderBottomWidth: 1,
  //   width: Dimensions.get('screen').width * 0.9,
  //   marginBottom: 10,
  // },
  // loginFormNavContainer: {
  //   // backgroundColor: 'royalblue',
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
  //   height: Dimensions.get('screen').height * 0.25,
  //   width: Dimensions.get('screen').width * 0.9,
  // },
  // SignInNavText: {
  //   flexDirection: 'column',
  //   marginRight: 'auto',
  //   marginLeft: 20,
  // },
  // loginFormSignInLabel: {
  //   color: 'white',
  //   fontSize: 50,
  //   fontWeight: '200',
  //   marginBottom: 13,
  // },
  // loginFormForgotPasswordButtonLabel: {
  //   color: 'white',
  //   fontSize: 15,
  //   fontWeight: '200',
  // },
  // loginFormSubmitButton: {
  //   backgroundColor: 'white',

  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   width: 100,
  //   height: 100,
  //   borderRadius: 100 / 2,

  //   marginRight: 20,
  // },
});
