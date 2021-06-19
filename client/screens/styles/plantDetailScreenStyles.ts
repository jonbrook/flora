import { StyleSheet, Dimensions } from 'react-native';

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

export default styles;
