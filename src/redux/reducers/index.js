import { combineReducers } from 'redux';
import items from './items';
import users from './users';
import notification from './notification';

export default combineReducers({ items, users, notification });

