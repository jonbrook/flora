import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import PlantListItem from '../components/PlantListItem';
import styles from './styles/plantListScreenStyles';

const PlantListScreen = ({ history }: { history: any }) => {
  // TODO: remove the any types
  const { PlantsByUser }: any = useSelector<any>((state) => state);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.contentContainer}>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>flora</Text>
        </View>
        <FlatList
          testID="item"
          data={PlantsByUser}
          renderItem={({ item }) => (
            <PlantListItem plant={item} history={history} />
          )}
          keyExtractor={(item) => item.id.toString()}
          style={{ paddingVertical: 20 }}
        />
        <TouchableOpacity
          style={styles.addPlantButton}
          onPress={() => history.push('/CameraScreen')}
        >
          <AntDesign name="plus" size={35} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PlantListScreen;
