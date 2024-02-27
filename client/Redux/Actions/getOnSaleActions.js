import axios from "axios";
export const FETCH_ONSALE_EVENTS_SUCCESS = 'FETCH_ONSALE_EVENTS_SUCCESS';
export const FETCH_ONSALE_EVENTS_ERROR = 'FETCH_ONSALE_EVENTS_ERROR'

export const fetchOnSaleEvents = () => async (dispatch) => {
    let today = new Date(new Date().setHours(0, 0, 0, 0));
    const formattedToday = today.toISOString().split('T')[0] + "T00:00:00Z";
    console.log(formattedToday)

    let twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(today.getDate() - 14);
    const formattedTwoWeeksAgo = twoWeeksAgo.toISOString().split('T')[0] + "T00:00:00Z";

    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=D23kNHOosZFqS225UqGpFbM4XOqB1LsC&classificationName=Music&onsaleOnAfterStartDate=${formattedTwoWeeksAgo}-${formattedToday}&sort=date,asc`;


    try {
        const response = await axios.get(url);
        
        if (response.status === 200 && response.data._embedded) {
            dispatch({ type: FETCH_ONSALE_EVENTS_SUCCESS, payload: response.data._embedded.events });
        } else {
            dispatch({ type: FETCH_ONSALE_EVENTS_ERROR, payload: 'Failed to fetch on-sale events.' });
        }
    } catch (error) {
        dispatch({ type: FETCH_ONSALE_EVENTS_ERROR, payload: error.message || 'Unknown error occurred.' });
    }
};