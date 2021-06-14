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
import { register } from '../ApiService';

//TODO convert into 1 state
const RegisterForm = ({ history }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const onPressHandler = () => {
    //Defines the shape of login request
    let userDetails = {
      username,
      email,
      password,
    };

    //needs to be async
    const userDoesNotExists = register(userDetails);
    if (userDoesNotExists) {
      history.push('/PlantListScreen');
    } else {
      console.log('Incorrect details');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.registerFormContainer}>
        <ScrollView style={styles.ScrollView}>
          <View>
            <Text style={styles.registerFormInputTextLabel}>username</Text>
            <TextInput
              style={styles.registerFormInputTextValue}
              value={username}
              onChangeText={setUsername}
            />
            <Text style={styles.registerFormInputTextLabel}>email</Text>
            <TextInput
              style={styles.registerFormInputTextValue}
              value={email}
              onChangeText={setEmail}
            />
            <Text style={styles.registerFormInputTextLabel}>password</Text>
            <TextInput
              style={styles.registerFormInputTextValue}
              value={password}
              onChangeText={setPassword}
            />
            <Text style={styles.registerFormInputTextLabel}>
              confirm password
            </Text>
            <TextInput
              style={styles.registerFormInputTextValue}
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
            />
          </View>
          <View style={styles.registerFormNavContainer}>
            <View style={styles.RegisterNavText}>
              <Text style={styles.registerFormRegisterLabel}>Register</Text>
            </View>
            <TouchableOpacity
              style={styles.registerFormSubmitButton}
              onPress={() => onPressHandler()}
            >
              <AntDesign name="arrowright" size={55} color="#10360E" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    // backgroundColor: 'yellow',
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  registerFormContainer: {
    backgroundColor: '#10360E',

    flex: 1,
    alignItems: 'center',
  },
  registerFormLogoContainer: {
    // backgroundColor: 'pink',

    justifyContent: 'center',
    alignItems: 'center',

    height: Dimensions.get('screen').height * 0.25,
    width: Dimensions.get('screen').width * 0.9,
  },
  registerFormInputContainer: {
    backgroundColor: 'blue',
    justifyContent: 'center',

    height: Dimensions.get('screen').height * 0.33,
    width: Dimensions.get('screen').width * 0.9,
  },
  registerFormInputTextLabel: {
    color: 'white',
    fontSize: 23,
    fontWeight: '200',
  },
  registerFormInputTextValue: {
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
  registerFormNavContainer: {
    // backgroundColor: 'royalblue',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: Dimensions.get('screen').height * 0.25,
    width: Dimensions.get('screen').width * 0.9,
  },
  RegisterNavText: {
    flexDirection: 'column',
    marginRight: 'auto',
    marginLeft: 20,
  },
  registerFormRegisterLabel: {
    color: 'white',
    fontSize: 50,
    fontWeight: '200',
    marginBottom: 13,
  },

  registerFormSubmitButton: {
    backgroundColor: 'white',

    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,

    marginRight: 20,
  },
});

export default RegisterForm;
