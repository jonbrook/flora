import firebase from 'firebase';
import axios from 'axios';
import { BACKEND_URL } from '@env';
import firebaseConfig from './config/firebase.config';

const baseUrl = BACKEND_URL;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const login = async (userLoginDetails: {
  email: string;
  password: string;
}) => {
  try {
    const { data, status } = await axios.post(
      `${baseUrl}/login`,
      userLoginDetails,
    );
    if (status === 200) {
      return data;
    }
    throw new Error('Incorrect username/password');
  } catch (error) {
    throw new Error('failed to connect to the server');
  }
};

export const register = async (userRegisterDetails: {
  username: string;
  email: string;
  password: string;
}) => {
  const { username, email, password } = userRegisterDetails;
  try {
    const response = await axios.post(`${baseUrl}/register`, {
      username,
      email,
      password,
    });
    if (response.status === 201) {
      return response;
    }
    throw new Error('User already registered');
  } catch (error) {
    throw new Error('failed to connect to the server');
  }
};

const generateFirebaseUrl = async (uri: string) => {
  const blob: any = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function onload() {
      resolve(xhr.response);
    };
    xhr.onerror = function onerror() {
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const ref = firebase.storage().ref().child(new Date().toISOString());
  const snapshot = await ref.put(blob);

  blob.close();

  const url = await snapshot.ref.getDownloadURL();
  // eslint-disable-next-line no-console
  console.log(url);
};

export const addPlantsByUser = async (plantUri: string, history: any) => {
  const firebaseURL = await generateFirebaseUrl(plantUri);
  const classification = 'Ficus Elastica';
  const plantByUser = {
    scientificName: classification,
    email: 'email@gmail.com',
    pictureUrl: firebaseURL,
    lastWatered: 0,
  };
  // eslint-disable-next-line no-console
  console.log('plantbyUser: ', [plantByUser]);
  history.push('/PlantListScreen');
};
