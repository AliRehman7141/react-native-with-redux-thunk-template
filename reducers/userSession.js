import * as types from '../actions/types'

const INITIAL_STATE = {
    currentUser: null,
    isSignedIn: false,
    authToken: null,
    showBack: false,
    subscription: null,
    notification_status: 0
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.LOGOUT:
            return INITIAL_STATE;
        case types.USER_SESSION_CHANGE_STATE:
            return {
                ...state,
                ...action.payload,
            };
        case types.SET_USER:
            return {
                ...state,
                currentUser: action.payload.data,
                notification_status: action.payload.data?.notification_status,
                subscription: action.payload?.subscription,
            };
        case types.LOGIN_RESPONSE:
            return {
                ...state,
                currentUser: action.payload.data,
                notification_status: action.payload.data?.notification_status,
                isSignedIn: true,
                authToken: action.payload.token,
                subscription: action.payload.subscription,
            };
        case types.SIGNUP_RESPONSE:
            return {
                ...state,
                currentUser: action.payload.data,
                notification_status: action.payload.data?.notification_status,
                isSignedIn: true,
                authToken: action.payload.token,
                subscription: action.payload.subscription,
            };
        default:
            return state;
    }
}