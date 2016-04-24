import {IRState} from './interfaces/IRState';
import {createStore} from './createStore';

let rstate:IRState = {
    createStore: createStore
};

export {rstate}