import {IRStateStore} from './interfaces/IRStateStore';
import {Store} from './Store';

function createStore<S,A>(reducer:(state:S, action:A)=>S):IRStateStore<S,A> {
    return new Store(reducer);
}

export {createStore}