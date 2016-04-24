import { IRStateStore } from './interfaces/IRStateStore';
declare class Store<S, A> implements IRStateStore<S, A> {
    private _state;
    private _reducer;
    private _listeners;
    private _activeDispatcher;
    constructor(reducer: (state: S, action: A) => S);
    dispatch(action: A): void;
    getState(): S;
    subscribe(subscriber: () => void): void;
}
export { Store };
