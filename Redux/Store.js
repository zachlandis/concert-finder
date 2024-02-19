import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer } from "./Reducers/getEventsReducer";

const store = configureStore({
    reducer: {
        events: eventsReducer
    }
});

export default store;