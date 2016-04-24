import { IRStateStore } from './interfaces/IRStateStore';
declare function createStore<S, A>(reducer: (state: S, action: A) => S): IRStateStore<S, A>;
export { createStore };
