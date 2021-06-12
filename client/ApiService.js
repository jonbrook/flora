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

const apiService = {};
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

import * as firebase from 'firebase';
import firebaseConfig from './apiKeys/firebase.config.js';

// firebase setup
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

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
  generateFirebaseUrl,
};
