import { BehaviorSubject } from 'rxjs';

//for dummy data it's an array, but needs to be an empty object with JSON
const plants$ = new BehaviorSubject([]);
const plantsByUser$ = new BehaviorSubject([]);
const user$ = new BehaviorSubject([]);

// const plants$ = new BehaviorSubject({});
// const plantsByUser$ = new BehaviorSubject({});
// const user$ = new BehaviorSubject({});

module.exports = {
  user$,
  plants$,
  plantsByUser$,
};
