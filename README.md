##Rstate
A dead-simple state container - redux api compatible on the basic level (createStore, dispatch, subscribe, getState)

###Why?
I've found out that redux is an overkill for some projects, but I still liked the way it worked.

###How?
I've implemented a simple module that has a storage, allows to bind subscribers and dispatch actions. The store has a redux compatible api: createStore, dispatch, subscribe, getState.

###Techy side
You don't get the dispatch event on each change. Although the state gets updated on each dispatch, I then use requestAnimationFrame/cancelAnimationFrame to threshold the number of dispatch events to keep the resulting rendering as effective to the given platform as possible.

###Typescript?
Yes. Look at the interface definitions - pretty, pretty stuff. 

