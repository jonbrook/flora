import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setPlants, setUser } from '../store/action';
import { AntDesign } from '@expo/vector-icons';
import { login } from '../ApiService';
import styles from './styles/loginFormStyles';

const LoginForm = ({ history }: { history: any }) => {
  const [email, setEmail] = useState('');
  const [password, setUserPassword] = useState('');

  const dispatch = useDispatch();
  const updateUser = (user: User) => dispatch(setUser(user));
  const updatePlants = (plants: PlantsByUser[]) => dispatch(setPlants(plants));

  const onPressHandler = async () => {
    const user = await login({ email, password });
    if (user) {
      updateUser(user);
      updatePlants(user.PlantsByUsers);
      history.push('/PlantListScreen');
    } else {
      setEmail('');
      setUserPassword('');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.loginFormContainer}>
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.loginFormInputTextLabel}>email</Text>
            <TextInput
              accessibilityLabel="emailInput"
              style={styles.loginFormInputTextValue}
              value={email}
              onChangeText={setEmail}
            />
            <Text style={styles.loginFormInputTextLabel}>password</Text>
            <TextInput
              accessibilityLabel="passwordInput"
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
              accessibilityLabel="submit"
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
