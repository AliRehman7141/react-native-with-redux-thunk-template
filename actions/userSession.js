import {
  LOGOUT,
  SET_USER,
  LOGIN_RESPONSE,
  SIGNUP_RESPONSE,
  USER_SESSION_CHANGE_STATE
} from './types';

export const onLoginResponse = (payload) => ({
  type: LOGIN_RESPONSE,
  payload
});
export const onSignupResponse = (payload) => ({
  type: SIGNUP_RESPONSE,
  payload
});

export const setUser = (currentUser) => ({
  type: SET_USER,
  payload: currentUser
});

export const logoutUser = () => ({
  type: LOGOUT
})

export const userSessionChangeState = (payload) => ({
  type: USER_SESSION_CHANGE_STATE,
  payload
})

