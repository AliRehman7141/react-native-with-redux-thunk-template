import { postRequest, getRequest } from '../index';

export const updateProfileAPI = (payload) =>
    postRequest(`/update_profile`, payload);

export const getProfileAPI = () =>
    getRequest(`/user_profile`);