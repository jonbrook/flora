import firebase from 'firebase';
import firebaseConfig from './apiKeys/firebase.config.js';
import axios from 'axios';
import { user$, plants$, plantsByUser$ } from './behaviorSubjects';

// TODO: add to env vars
const baseUrl = 'http://192.168.1.3:3001';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const login = async (
  userLoginDetails,
  setPlants,
  setUserPlants,
  setUser,
) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, userLoginDetails);
    if (response.status === 200) {
      user$.next(userLoginDetails);
      plants(setPlants);
      plantsByUser(userLoginDetails.email, setUserPlants);
      setUser(userLoginDetails);
      return true;
    } else {
      throw new Error('Incorrect username/password');
    }
  } catch (error) {
    console.log(JSON.stringify(error));
    throw new Error('failed to connect to the server');
  }
};

export const register = async (userRegisterDetails) => {
  const { username, email, password } = userRegisterDetails;
  try {
    const response = await axios.post(`${baseUrl}/register`, {
      username,
      email,
      password,
    });
    if (response.status === 201) {
      user$.next(userRegisterDetails);
      // plants();
      // plantsByUser(userRegisterDetails.email);
      return response;
    } else {
      throw new Error('User already registered');
    }
  } catch (error) {
    console.log(error);
    throw new Error('failed to connect to the server');
  }
};

const plants = async (setPlants) => {
  try {
    const response = await axios.get(`${baseUrl}/plants`);
    console.log('response data', response.data);
    try {
      setPlants(response.data);
      // plants$.next(response.data);
    } catch (error) {
      console.log('next error', error);
    }
  } catch (error) {
    throw new Error('failed to connect to the server');
  }
};

const plantsByUser = async (userEmail, setUserPlants) => {
  try {
    const response = await axios.get(`${baseUrl}/plantsbyuser/${userEmail}`);
    // console.log('response in plantsbyuser API', response.data);
    // plantsByUser$.next(response.data);
    setUserPlants(response.data);
  } catch (error) {
    throw new Error('failed to connect to the server');
  }
};

export const addPlantsByUser = async (
  setUserPlants,
  plantUri = null,
  history,
) => {
  const firebaseURL = await generateFirebaseUrl(plantUri);
  const classification = 'Ficus Elastica'; //call autoML api client api
  const plantByUser = {
    scientificName: classification,
    email: 'email@gmail.com',
    pictureUrl: firebaseURL,
    lastWatered: 0,
  };
  // console.log('plantbyUser: ', [plantByUser, ...plantsByUser$]);

  // setUserPlants([...plantsByUser$, plantByUser]);
  history.push('/PlantListScreen');
  // try {
  //   axios.post(`${baseUrl}/plantsbyuser`, plantByUser);
  // } catch (error) {
  //   throw new Error('failed to connect to the server');
  // }
};
// const addUser = (userDetails) => {
//   try {
//     axios.post(`${baseUrl}/user`, userDetails);
//   } catch (error) {
//     throw new Error('failed to connect to the server');
//   }
// };

// function uploads picture to firestore and generates a unique picture URL
const generateFirebaseUrl = async (uri) => {
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

  // We're done with the blob, close and release it
  blob.close();

  const url = await snapshot.ref.getDownloadURL();
  // savePicture(url);
  // pass this image url to the image classifier
  console.log(url);
};
