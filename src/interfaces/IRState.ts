import {IRStateStore} from './IRStateStore';

interface IRState {
    createStore:<S,A>(reducer:(state:S, action:A)=>S)=>IRStateStore<S,A>
}

export {IRState}