import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import { useSubject } from '../hooks/useSubject';
import { user$, plants$, plantsByUser$ } from '../behaviorSubjects';
import { AntDesign } from '@expo/vector-icons';
import { login } from '../ApiService';
import styles from './styles/loginFormStyles';

const LoginForm = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setUserPassword] = useState('');

  const [_, setPlants] = useSubject(plants$);
  const [__, setUserPlants] = useSubject(plantsByUser$);
  const [___, setUser] = useSubject(user$);

  const onPressHandler = async () => {
    //Defines the shape of login request
    let userDetails = {
      email,
      password,
    };

    const loggedIn = await login(
      userDetails,
      setPlants,
      setUserPlants,
      setUser,
    );
    if (loggedIn) {
      console.log('logged in');
      history.push('/PlantListScreen');
    } else {
      console.log('Incorrect login details');
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
