import { postRequest } from '../index';

export const loginAPI = (payload) =>
    postRequest(`/signin`, payload);

export const sigupAPI = (payload) =>
    postRequest(`/signup`, payload);

export const forgetPasswordAPI = (payload) =>
    postRequest(`/forget_password`, payload);
    
export const logoutAPI = (payload) =>
    postRequest(`/logout`, payload);