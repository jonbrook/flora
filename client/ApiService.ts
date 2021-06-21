import firebase from 'firebase';
import firebaseConfig from './config/firebase.config';
import axios from 'axios';
import { BACKEND_URL } from '@env';

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
    } else {
      throw new Error('Incorrect username/password');
    }
  } catch (error) {
    console.log(JSON.stringify(error));
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
    } else {
      throw new Error('User already registered');
    }
  } catch (error) {
    console.log(error);
    throw new Error('failed to connect to the server');
  }
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
  console.log('plantbyUser: ', [plantByUser]);

  history.push('/PlantListScreen');
};

const generateFirebaseUrl = async (uri: string) => {
  // TODO: remove any type from blob
  const blob: any = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function () {
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
  // savePicture(url);
  // pass this image url to the image classifier
  console.log(url);
};
