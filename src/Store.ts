import {IRStateStore} from './interfaces/IRStateStore'

class Store<S,A> implements IRStateStore<S,A> {
    private _state:S;
    private _reducer:(state:S, action:A)=>S;

    constructor(reducer:(state:S, action:A)=>S) {

    }

    dispatch(action:A) {

    }

    getState() {
        return this._state;
    }

    subscribe() {

    }
}

export {Store}