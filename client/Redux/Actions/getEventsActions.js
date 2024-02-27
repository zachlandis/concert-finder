import axios from 'axios';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_ERROR = 'FETCH_EVENTS_ERROR'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


export const fetchMusicEvents = (currentPage, filter, stateCode, city, genre, countryCode) => {
    return async (dispatch) => {
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=D23kNHOosZFqS225UqGpFbM4XOqB1LsC&classificationName=Music&genreId=${genre}&sort=date,asc&page=${currentPage}&keyword=${encodeURIComponent(filter)}&countryCode=${countryCode}&stateCode=${stateCode}&city=${city}`
        const response = await axios.get(url);
        if (response.status === 200) {
            if (response.data._embedded && Array.isArray(response.data._embedded.events)) {
                const events = response.data._embedded.events;
                const totalPages = response.data.page.totalPages
                dispatch({ type: 'FETCH_EVENTS_SUCCESS', payload: { events, totalPages } });
            }
        } else {
            dispatch({ type: 'FETCH_EVENTS_ERROR', payload: error})
        }
    };
};

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page,
});
