"use strict";
var Store = (function () {
    function Store(reducer) {
        this._reducer = function (state, action) { return state; };
        this._listeners = [];
        this._reducer = reducer;
    }
    Store.prototype.dispatch = function (action) {
        var _this = this;
        if (this._activeDispatcher) {
            cancelAnimationFrame(this._activeDispatcher);
        }
        requestAnimationFrame(function () {
            _this._state = _this._reducer(_this._state, action);
            _this._listeners.forEach(function (listener) {
                listener();
            });
        });
    };
    Store.prototype.getState = function () {
        return this._state;
    };
    Store.prototype.subscribe = function (subscriber) {
        this._listeners.push(subscriber);
    };
    return Store;
}());
exports.Store = Store;
