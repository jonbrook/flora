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

const RegisterForm = ({ history }) => {
  const [username, setUsername] = useState('');
  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const onPressHandler = () => {
    // Check if it's a valid user
    // if valid
    history.push('/PlantListScreen');
    // else
    // error please use another
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.registerFormContainer}>
        <ScrollView style={styles.ScrollView}>
          <View style={styles.registerFormLogoContainer}>
            <Image source={require('../assets/favicon.png')} />
          </View>
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
              onChangeText={setUserEmail}
            />
            <Text style={styles.registerFormInputTextLabel}>password</Text>
            <TextInput
              style={styles.registerFormInputTextValue}
              value={password}
              onChangeText={setUserPassword}
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

export default RegisterForm;

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
