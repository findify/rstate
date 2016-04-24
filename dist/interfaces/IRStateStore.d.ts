interface IRStateStore<S, A> {
    dispatch: (action: A) => void;
    getState: () => S;
    subscribe: (subscriber: () => void) => void;
}
export { IRStateStore };
