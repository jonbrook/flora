import { BehaviorSubject } from 'rxjs';

export const plants$ = new BehaviorSubject([]);
console.log('plants in behaviorsubject.js', plants$);
export const plantsByUser$ = new BehaviorSubject([]);
export const user$ = new BehaviorSubject({});
