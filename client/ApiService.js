// /**
//  * TODO(developer): Uncomment these variables before running the sample.
//  */
// // const projectId = 'YOUR_PROJECT_ID';
// // const location = 'us-central1';
// // const modelId = 'YOUR_MODEL_ID';
// // const filePath = 'path_to_local_file.jpg';

// // Imports the Google Cloud AutoML library
// const { PredictionServiceClient } = require('@google-cloud/automl').v1;
// const fs = require('fs');

// // Instantiates a client
// const client = new PredictionServiceClient();

// // Read the file content for translation.
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

//   const [response] = await client.predict(request);

//   for (const annotationPayload of response.payload) {
//     console.log(`Predicted class name: ${annotationPayload.displayName}`);
//     console.log(
//       `Predicted class score: ${annotationPayload.classification.score}`,
//     );

// };
const baseUrl = 'http://localhost:3000';
const USERS = [
  {
    username: 'd',
    email: 'a',
    password: '1234',
  },
  {
    username: 'd',
    email: 'a',
    password: '1234',
  },
];

const PLANTLIST = [
  {
    scientificName: 'Ficus elastica',
    email: 'email@email.com',
    pictureUrl:
      'https://www.google.com/search?q=ficus&safe=strict&rlz=1C5CHFA_enZA941ZA941&sxsrf=ALeKk02ARstdbQ3338VQ1aQNgb1k6Wq32Q:1623502799485&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjDvZ6dk5LxAhWKTcAKHTlFBdoQ_AUoAXoECAEQAw&biw=1230&bih=887#imgrc=4-MrSAJP4pApdM',
    lastWatered: 0,
  },
  {
    scientificName: 'Dracaena trifasciata',
    email: 'email@email.com',
    pictureUrl:
      'https://www.google.com/search?q=ficus&safe=strict&rlz=1C5CHFA_enZA941ZA941&sxsrf=ALeKk02ARstdbQ3338VQ1aQNgb1k6Wq32Q:1623502799485&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjDvZ6dk5LxAhWKTcAKHTlFBdoQ_AUoAXoECAEQAw&biw=1230&bih=887#imgrc=4-MrSAJP4pApdM',
    lastWatered: 0,
  },
  {
    scientificName: 'Monstera deliciosa',
    email: 'email@email.com',
    pictureUrl:
      'https://www.google.com/search?q=ficus&safe=strict&rlz=1C5CHFA_enZA941ZA941&sxsrf=ALeKk02ARstdbQ3338VQ1aQNgb1k6Wq32Q:1623502799485&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjDvZ6dk5LxAhWKTcAKHTlFBdoQ_AUoAXoECAEQAw&biw=1230&bih=887#imgrc=4-MrSAJP4pApdM',
    lastWatered: 0,
  },
];

const PLANTS = [
  {
    id: 1,
    scientificName: 'Ficus elastica',
    commonName: 'Rubber Plant',
    sunlight: 'Part shade',
    waterAmount: 200,
    waterFrequency: 14,
    lastWatered: 0,
    airPurifying: true,
    humidity: true,
  },
  {
    id: 2,
    scientificName: 'Monstera deliciosa',
    commonName: 'Swiss Cheese Plant',
    sunlight: 'Part shade',
    waterAmount: 200,
    waterFrequency: 14,
    lastWatered: 0,
    airPurifying: true,
    humidity: true,
  },
  {
    id: 4,
    scientificName: 'Sansevieria trifasciata',
    commonName: 'Snake Plant',
    sunlight: 'Part shade',
    waterAmount: 200,
    waterFrequency: 14,
    lastWatered: 0,
    airPurifying: true,
    humidity: true,
  },
  {
    id: 5,
    scientificName: 'Crassula ovata',
    commonName: 'Jade Plant',
    sunlight: 'Part shade',
    waterAmount: 200,
    waterFrequency: 14,
    lastWatered: 0,
    airPurifying: true,
    humidity: true,
  },
];

//Destructure firebase
import * as firebase from 'firebase';
import firebaseConfig from './apiKeys/firebase.config.js';
import axios from 'axios';
import { user$, plants$, plantsByUser$ } from './behaviorSubjects.js';

// firebase setup
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const login = (userLoginDetails) => {
  console.log('userdetails', userLoginDetails);
  if (
    userLoginDetails.email === USERS[0].email &&
    userLoginDetails.password === USERS[0].password
  ) {
    user$.next(USERS[0]);
    plants();
    plantsByUser(userLoginDetails.email);
    return true;
    // try {
    //   const response = await axios.post(`${baseUrl}/login`, userLoginDetails);
    //   if (response.status === 200) {
    //     user$.next(userLoginDetails);
    //     plants();
    //     plantsByUser(userLoginDetails.email);
    //     return true;
    //   } else {
    //     throw new Error('Incorrect username/password');
    //   }
    // } catch (error) {
    //   console.log(JSON.stringify(error));
    //   throw new Error('failed to connect to the server');
    // }
  }
};
const register = (userRegisterDetails) => {
  console.log('userdetails', userRegisterDetails);
  const isAvailableDetails = USERS.filter(
    (user) => user.email === userRegisterDetails.email,
  );

  if (isAvailableDetails.length === 0) {
    user$.next(userRegisterDetails);
    plants();
    plantsByUser(userRegisterDetails.email);
    return true;
  }
};
// const register = async (userRegisterDetails) => {
//   try {
//     const response = await axios.post(
//       `${baseUrl}/register`,
//       userRegisterDetails,
//     );
//     if (response.status === 201) {
//       user$.next(userRegisterDetails);
//       plants();
//       plantsByUser(userRegisterDetails.email);
//       return true;
//     } else {
//       throw new Error('User already registered');
//     }
//   } catch (error) {
//     console.log(JSON.stringify(error));
//     throw new Error('failed to connect to the server');
//   }
// };

// Gets all objects in the plants table in database
// async
const plants = () => {
  plants$.next(PLANTS);
  // try {
  //   const response = await axios.get(`${baseUrl}/plants`);
  //   // Need to spread the response
  //   plants$.next(response.data);
  // } catch (error) {
  //   throw new Error('failed to connect to the server');
  // }
};

// Gets all objects in the plant user table in database.
const plantsByUser = (userEmail) => {
  plantsByUser$.next(PLANTLIST);
  // try {
  //   const response = await axios.get(`${baseUrl}/plantsbyuser/:${userEmail}`);
  //   plantsByUser$.next(response.data);
  // } catch (error) {
  //   throw new Error('failed to connect to the server');
  // }
};

const addPlantsByUser = (userDetails, plantUrl) => {
  // const classification = ''; //call autoML api client api
  // const plantByUser = {
  //   scientificName: classification,
  //   email: userDetails.email,
  //   pictureUrl: plantUrl,
  //   lastWatered: 0,
  // };
  // plantsByUser$.next(plantByUser);
  // try {
  //   axios.post(`${baseUrl}/plantsbyuser/:${userDetails.email}`, plantsByUser);
  // } catch (error) {
  //   throw new Error('failed to connect to the server');
  // }
};

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
