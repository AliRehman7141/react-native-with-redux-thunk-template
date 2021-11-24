import { postRequest } from '../index';

export const getNotificationsAPI = (payload) =>
    postRequest(`/notification_list`, payload);