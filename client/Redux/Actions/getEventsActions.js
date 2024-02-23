import axios from 'axios';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';


export const fetchEDMEvents = (currentPage = 1) => {
    return async (dispatch) => {
        const resultsPerPage = 10;
        const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=D23kNHOosZFqS225UqGpFbM4XOqB1LsC&classificationName=Music&genreId=KnvZfZ7vAvF&number=${resultsPerPage}&offset=${(currentPage - 1) * resultsPerPage}`);

        if (response.status === 200) {
            const events = response.data._embedded.events;
            dispatch({ type: 'FETCH_EVENTS_SUCCESS', payload: events });
        } else {
            console.log("Error fetching events (from getEventsActions)");
        }
    };
};
