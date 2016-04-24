import {IRStateStore} from './interfaces/IRStateStore'

class Store<S,A> implements IRStateStore<S,A> {
    private _state:S;
    private _reducer:(state:S, action:A)=>S = (state:S, action:A)=>state;
    private _listeners:(()=>void)[] = [];
    private _activeDispatcher:number;

    constructor(reducer:(state:S, action:A)=>S) {
        this._reducer = reducer;
    }

    dispatch(action:A) {
        if (this._activeDispatcher) {
            cancelAnimationFrame(this._activeDispatcher);
        }

        requestAnimationFrame(()=> {
            this._state = this._reducer(this._state, action);

            this._listeners.forEach((listener)=> {
                listener();
            });
        });
    }

    getState() {
        return this._state;
    }

    subscribe(subscriber:()=>void) {
        this._listeners.push(subscriber);
    }
}

export {Store}