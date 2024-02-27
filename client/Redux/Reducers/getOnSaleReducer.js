import { FETCH_ONSALE_EVENTS_SUCCESS, FETCH_ONSALE_EVENTS_ERROR } from '../Actions/getOnSaleActions'

const initialState = {
    onSaleEvents: [],
    error: null,
}

export const onSaleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ONSALE_EVENTS_SUCCESS:
            return {
                ...state,
                onSaleEvents: action.payload,
                error: null,
            };
        case FETCH_ONSALE_EVENTS_ERROR:
            return {
                ...state,
                // Keeping onSaleEvents as an empty array for consistency
                onSaleEvents: [],
                // Assuming action.payload is the error message
                error: action.payload
            };
        default:
            return state;
    }
}
