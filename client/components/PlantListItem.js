import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { Foundation } from '@expo/vector-icons';

const PlantListItem = ({ plant, history }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        history.push('/PlantDetailsScreen');
      }}
    >
      <View style={styles.plantListItemContainer}>
        <View style={styles.plantListItemPictureContainer}>
          {/* Image */}
          <View style={styles.plantListItemPicture} />
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
              <View style={[styles.plantStatusCurrent, styles.blueStatus]} />
            </View>
            <View style={[styles.plantStatusBorder, styles.yellowBorder]}>
              <View style={[styles.plantStatusCurrent, styles.yellowStatus]} />
            </View>
            <View style={[styles.plantStatusBorder, styles.brownBorder]}>
              <View style={[styles.plantStatusCurrent, styles.brownStatus]} />
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
    height: `${(80 / 100) * 100}%`,
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
