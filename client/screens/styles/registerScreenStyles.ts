import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#10360E',
    flex: 1,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
  },
  registerScreenLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height * 0.25,
    width: Dimensions.get('screen').width * 1,
  },
});

export default styles;
