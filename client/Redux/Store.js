import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer } from "./Reducers/getEventsReducer";
import { onSaleReducer } from "./Reducers/getOnSaleReducer";

const store = configureStore({
    reducer: {
        events: eventsReducer,
        onSaleEvents: onSaleReducer,
    }
});

export default store;