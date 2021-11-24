import * as types from '../actions/types'

const INITIAL_STATE = {
    notifications: [],
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.LOGOUT:
            return INITIAL_STATE;
        case types.NOTIFICATIONS_CHANGE_STATE:
            return {
                ...state,
                ...action.payload,
            };
        case types.FETCH_NOTIFICATIONS_RESPONSE:
            return {
                ...state,
                notifications: action.payload.data,
            };
        default:
            return state;
    }
}