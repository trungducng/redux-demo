import * as redux from 'redux';
var statusReducer = require('./statusReducer.js');
var mangReducer = require ('./mangReducer.js');

export var rootReducer = redux.combineReducers({
    mang: mangReducer,
    status: statusReducer
});
