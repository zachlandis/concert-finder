import { FETCH_EVENTS_SUCCESS } from '../Actions/getEventsActions';


const initialEventsState = {
    events: [],
    error: null,
}

export const eventsReducer = (state = initialEventsState, action) => {
    switch (action.type) {
        case FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                events: action.payload,
                error: null,
            };
            default:
                return state;
    }
}

