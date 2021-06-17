import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#10360E',
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  contentContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#10360E',
    width: Dimensions.get('screen').width,
  },
  navbarTitle: {
    color: 'white',
    fontSize: 45,
    fontWeight: '200',
  },
  addPlantButton: {
    backgroundColor: '#10360E',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    bottom: 50,

    borderRadius: 35,
    height: Dimensions.get('screen').height * 0.1,
    width: Dimensions.get('screen').width * 0.4,
  },
});

export default styles;
