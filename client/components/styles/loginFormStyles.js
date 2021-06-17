import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  loginFormContainer: {
    backgroundColor: '#10360E',

    flex: 1,
    alignItems: 'center',
  },
  loginFormLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    height: Dimensions.get('screen').height * 0.5,
    width: Dimensions.get('screen').width * 0.9,
  },
  loginFormInputContainer: {
    backgroundColor: 'blue',
    justifyContent: 'center',

    height: Dimensions.get('screen').height * 0.33,
    width: Dimensions.get('screen').width * 0.9,
  },
  loginFormInputTextLabel: {
    color: 'white',
    fontSize: 23,
    fontWeight: '200',
  },
  loginFormInputTextValue: {
    // backgroundColor: 'red',
    color: 'white',
    fontSize: 30,
    fontWeight: '200',

    justifyContent: 'center',

    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: Dimensions.get('screen').width * 0.9,
    marginBottom: 10,
  },
  loginFormNavContainer: {
    // backgroundColor: 'royalblue',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: Dimensions.get('screen').height * 0.25,
    width: Dimensions.get('screen').width * 0.9,
  },
  SignInNavText: {
    flexDirection: 'column',
    marginRight: 'auto',
    marginLeft: 20,
  },
  loginFormSignInLabel: {
    color: 'white',
    fontSize: 50,
    fontWeight: '200',
    marginBottom: 13,
  },
  loginFormForgotPasswordButtonLabel: {
    color: 'white',
    fontSize: 15,
    fontWeight: '200',
  },
  loginFormSubmitButton: {
    backgroundColor: 'white',

    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,

    marginRight: 20,
  },
});

export default styles;
