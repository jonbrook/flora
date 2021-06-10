import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import StatusCircle from '../components/StatusCircle';
import { Foundation } from '@expo/vector-icons';

const PlantListItem = ({ plant }) => {
  return (
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
        <View style={styles.plantStatus}>
          <StatusCircle color={'#040EF5'} />
          <StatusCircle color={'#F4BA26'} />
          <StatusCircle color={'#A52A2A'} />
        </View>
      </View>
    </View>
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

    marginBottom: 10,
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

    // backgroundColor: 'red',

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
  plantStatus: {
    // backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '40%',
    width: '80%',
  }
});
