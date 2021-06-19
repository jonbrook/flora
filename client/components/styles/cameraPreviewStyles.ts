import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  retakePictureButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    bottom: 50,
    left: 20,

    borderRadius: 35,
    height: Dimensions.get('screen').height * 0.1,
    width: Dimensions.get('screen').width * 0.4,
  },
  classifyPictureButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    bottom: 50,
    right: 20,

    borderRadius: 35,
    height: Dimensions.get('screen').height * 0.1,
    width: Dimensions.get('screen').width * 0.4,
  },
  pictureButtonText: {
    fontSize: 25,
    fontWeight: '200',
  },
});
export default styles;
