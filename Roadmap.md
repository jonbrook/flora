10/06/21

Define APIService
  - This is used to handle all traffic between API's and client
---------------------------------------------------------------

- get data from the server
  - PLANT: get information about a plant
        - sunlight
        - soil -> direct, partial-shade, shade
        - water amount -> depends on soil
        - frequency of watering -> just have a quick check
        - Last watered -> date
        - air purifying -> boolean
        - humidity -> low, medium, high

  - PLANT: update the last watered field

  - PLANT: add a plant to database
  - USER: get a user's details
  - USER: add user data
  - CLASSIFICATION: Send a picture of a plant to vision and receive a classification back.

    - PLANT: add a plant to database (Can add a plant more then once)
        - Watered is null
    - PLANT: Add the picture of the plant and the plant ID to the user


  - BEHAVIOR Subject:
    - Use a behavior subject to make the data received about a plant accessible throughout the app via subscription
    - Components that need this will subscribe to the behavior subject.


Screens
  - This folder will store all of the necessary screens for the app
---------------------------------------------------------------

  - Refer to wireframes
  - Home page sign in, register, loader, and plant list should be done by the end of the day.

Components

