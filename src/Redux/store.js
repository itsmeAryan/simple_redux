import {createStore,applyMiddleware,combineReducers} from 'redux';
import UserData from './Reducers/User';
import thunk from 'redux-thunk';
import loger from 'redux-logger';
const middle=[thunk,loger];
const REducer =combineReducers({
    dtuUser:UserData
});


const Store =createStore(REducer,applyMiddleware(...middle));
export default Store;