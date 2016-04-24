"use strict";
var Store_1 = require('./Store');
function createStore(reducer) {
    return new Store_1.Store(reducer);
}
exports.createStore = createStore;
