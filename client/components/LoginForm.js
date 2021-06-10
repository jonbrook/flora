import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setUserPassword] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.loginFormContainer}>
        <ScrollView style={styles.ScrollView}>
          <View style={styles.loginFormLogoContainer}>
            <Image source={require('../assets/favicon.png')} />
          </View>
          <View>
            <Text style={styles.loginFormInputTextLabel}>username</Text>
            <TextInput
              style={styles.loginFormInputTextValue}
              value={username}
              onChangeText={setUsername}
            />
            <Text style={styles.loginFormInputTextLabel}>password</Text>
            {console.log(password)}
            {/* <Text>Current value: {password}</Text> */}
            <TextInput
              style={styles.loginFormInputTextValue}
              value={password}
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
            <TouchableOpacity style={styles.loginFormSubmitButton}>
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
    // backgroundColor: 'pink',

    justifyContent: 'center',
    alignItems: 'center',

    height: Dimensions.get('screen').height * 0.45,
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
