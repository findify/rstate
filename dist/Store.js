"use strict";
var Store = (function () {
    function Store(reducer) {
    }
    Store.prototype.dispatch = function (action) {
    };
    Store.prototype.getState = function () {
        return this._state;
    };
    Store.prototype.subscribe = function () {
    };
    return Store;
}());
exports.Store = Store;
