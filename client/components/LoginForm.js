import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { login } from '../ApiService';

const LoginForm = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setUserPassword] = useState('');

  const onPressHandler = () => {
    //Defines the shape of login request
    let userDetails = {
      email,
      password,
    };

    //needs to be async
    const loggedIn = login(userDetails);
    if (loggedIn) {
      history.push('/PlantListScreen');
    } else {
      console.log('Incorrect details');
      setEmail('');
      setUserPassword('');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.loginFormContainer}>
        <ScrollView style={styles.ScrollView}>
          <View>
            <Text style={styles.loginFormInputTextLabel}>email</Text>
            <TextInput
              style={styles.loginFormInputTextValue}
              value={email}
              onChangeText={setEmail}
            />
            <Text style={styles.loginFormInputTextLabel}>password</Text>
            <TextInput
              style={styles.loginFormInputTextValue}
              value={password}
              secureTextEntry={true}
              onChangeText={setUserPassword}
            />
          </View>
          <View style={styles.loginFormNavContainer}>
            <View style={styles.SignInNavText}>
              <Text style={styles.loginFormSignInLabel}>Sign In</Text>
              <TouchableOpacity>
                <Text style={styles.loginFormForgotPasswordButtonLabel}>
                  forgot password?
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.loginFormSubmitButton}
              onPress={() => {
                onPressHandler();
              }}
            >
              <AntDesign name="arrowright" size={55} color="#10360E" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default LoginForm;

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
