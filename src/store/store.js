import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./reducers";

export const initializeStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware:
    })
}
