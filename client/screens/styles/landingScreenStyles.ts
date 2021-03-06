import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#10360E',
    flex: 1,
  },
  LandingScreenContainer: {
    backgroundColor: '#10360E',
    flex: 1,
    alignItems: 'center',
  },
  landingScreenLogoContainer: {
    marginBottom: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height * 0.64,
    width: Dimensions.get('screen').width * 0.9,
  },
  landingScreenName: {
    color: 'white',
    fontSize: 60,
    fontWeight: '200',
    marginTop: 20,
  },
  landingScreenButtonContainer: {
    justifyContent: 'center',
    height: Dimensions.get('screen').height * 0.33,
    width: Dimensions.get('screen').width * 0.9,
  },
  landingScreenLoginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: '#10360E',
    borderWidth: 2,
    borderRadius: 35,
    height: Dimensions.get('screen').height * 0.1,
    marginBottom: 13,
  },
  landingScreenRegisterButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#10360E',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 35,
    height: Dimensions.get('screen').height * 0.1,
  },
  landingScreenLoginButtonText: {
    color: '#10360E',
    fontSize: 37,
    fontWeight: '200',
  },
  landingScreenRegisterButtonText: {
    color: 'white',
    fontSize: 37,
    fontWeight: '200',
  },
});

export default styles;
