import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { register } from '../ApiService';
import styles from './styles/registerFormStyles';

//TODO convert into 1 state
const RegisterForm = ({ history }: { history: any }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const onPressHandler = async () => {
    //Defines the shape of login request
    let userDetails = {
      username,
      email,
      password,
    };

    //needs to be async
    const userDoesNotExists = await register(userDetails);
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
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.registerFormInputTextLabel}>username</Text>
            <TextInput
              accessibilityLabel="username-input"
              style={styles.registerFormInputTextValue}
              value={username}
              onChangeText={setUsername}
            />
            <Text style={styles.registerFormInputTextLabel}>email</Text>
            <TextInput
              testID="email"
              style={styles.registerFormInputTextValue}
              value={email}
              onChangeText={setEmail}
            />
            <Text style={styles.registerFormInputTextLabel}>password</Text>
            <TextInput
              testID="password"
              style={styles.registerFormInputTextValue}
              value={password}
              onChangeText={setPassword}
            />
            <Text style={styles.registerFormInputTextLabel}>
              confirm password
            </Text>
            <TextInput
              testID="confirm-password"
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
              testID="button"
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
