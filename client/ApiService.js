// /**
//  * TODO(developer): Uncomment these variables before running the sample.
//  */
// // const projectId = 'YOUR_PROJECT_ID';
// // const location = 'us-central1';
// // const modelId = 'YOUR_MODEL_ID';
// // const filePath = 'path_to_local_file.jpg';

//Destructure firebase
import * as firebase from 'firebase';
import firebaseConfig from './apiKeys/firebase.config.js';
import axios from 'axios';
import { user$, plants$, plantsByUser$ } from './behaviorSubjects.js';
import { PLANTS, PLANTLIST, USERS } from './mocks';
// const { PredictionServiceClient } = require('@google-cloud/automl').v1;
// const fs = require('fs');

// Instantiates a client
// const client = new PredictionServiceClient();

// Read the file content for translation.
// const content = fs.readFileSync(filePath);

// apiService.getClassification = async (url) => {
//   // Construct request
//   // params is additional domain-specific parameters.
//   // score_threshold is used to filter the result
//   const request = {
//     name: client.modelPath(projectId, location, modelId),
//     payload: {
//       image: {
//         imageBytes: content,
//       },
//     },
//   };

//   //   const [response] = await client.predict(request);

//   //   for (const annotationPayload of response.payload) {
//   //     console.log(`Predicted class name: ${annotationPayload.displayName}`);
//   //     console.log(
//   //       `Predicted class score: ${annotationPayload.classification.score}`,
//   //     );
// };
const baseUrl = 'http://192.168.68.111:3001';

// firebase setup
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const login = async (userLoginDetails, setPlants, setUserPlants) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, userLoginDetails);
    if (response.status === 200) {
      user$.next(userLoginDetails);
      plants(setPlants);
      plantsByUser(userLoginDetails.email, setUserPlants);
      return true;
    } else {
      throw new Error('Incorrect username/password');
    }
  } catch (error) {
    console.log(JSON.stringify(error));
    throw new Error('failed to connect to the server');
  }
};

// const register = (userRegisterDetails) => {
//   console.log('userdetails', userRegisterDetails);
//   const isAvailableDetails = USERS.filter(
//     (user) => user.email === userRegisterDetails.email,
//   );

//   if (isAvailableDetails.length === 0) {
//     user$.next(userRegisterDetails);
//     plants();
//     plantsByUser(userRegisterDetails.email);
//     return true;
//   }
// };
const register = async (userRegisterDetails) => {
  try {
    const response = await axios.post(
      `${baseUrl}/register`,
      userRegisterDetails,
    );
    if (response.status === 201) {
      user$.next(userRegisterDetails);
      plants();
      plantsByUser(userRegisterDetails.email);
      return true;
    } else {
      throw new Error('User already registered');
    }
  } catch (error) {
    console.log(JSON.stringify(error));
    throw new Error('failed to connect to the server');
  }
};

// Gets all objects in the plants table in database
// async
const plants = async (setPlants) => {
  try {
    const response = await axios.get(`${baseUrl}/plants`);
    console.log('response data', response.data);
    try {
      console.log('plants$ ', plants$);
      setPlants(response.data);
      // plants$.next(response.data);
    } catch (error) {
      console.log('next error', error);
    }
  } catch (error) {
    throw new Error('failed to connect to the server');
  }
};

// Gets all objects in the plant user table in database.
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

const addPlantsByUser = async (userDetails, plantUri = null) => {
  const firebaseURL = await generateFirebaseUrl(plantUri);
  const classification = 'Ficus Elastica'; //call autoML api client api
  const plantByUser = {
    scientificName: classification,
    email: userDetails.email,
    pictureUrl: firebaseURL,
    lastWatered: 0,
  };
  plantsByUser$.next({ ...plantsByUser$, plantByUser });
  try {
    axios.post(`${baseUrl}/plantsbyuser`, plantByUser);
  } catch (error) {
    throw new Error('failed to connect to the server');
  }
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
  const blob = await new Promise((resolve, reject) => {
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

module.exports = {
  login,
  register,
  generateFirebaseUrl,
  addPlantsByUser,
};
