import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#10360E',
    position: 'relative',
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
  },
  loginContainer: {
    flex: 1,
  },
  backIcon: {
    position: 'absolute',
    bottom: 0,
  },
  loginScreenLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    height: Dimensions.get('screen').height * 0.4,
    width: Dimensions.get('screen').width,
  },
});

export default styles;
