import { combineReducers } from 'redux';
import userSession from './userSession';
import notifications from './notifications'

export default combineReducers({
  userSession: userSession,
  notifications: notifications,
});
