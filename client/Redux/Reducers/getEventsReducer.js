import { FETCH_EVENTS_SUCCESS, FETCH_EVENTS_ERROR, SET_CURRENT_PAGE } from '../Actions/getEventsActions';


const initialEventsState = {
    events: [],
    totalPages: 0,
    currentPage: 0,
    error: null,
}

export const eventsReducer = (state = initialEventsState, action) => {
    switch (action.type) {
        case FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                events: action.payload.events,
                totalPages: action.payload.totalPages,
                error: null,
            };
        case FETCH_EVENTS_ERROR:
            return {
                ...state,
                error: action.payload.error,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
            default:
                return state;
    }
}

