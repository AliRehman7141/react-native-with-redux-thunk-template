import {
    FETCH_NOTIFICATIONS_RESPONSE,
    NOTIFICATIONS_CHANGE_STATE
} from './types';

export const onNotificationsResponse = (payload) => ({
    type: FETCH_NOTIFICATIONS_RESPONSE,
    payload
});

export const notificationsChangeState = (payload) => ({
    type: NOTIFICATIONS_CHANGE_STATE,
    payload
})

