import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import { combinedReducer } from "./combinedReducer";
import { rootReducer } from "./rootReducer";

/* const bindMiddleware = (middleware) => {
    if(process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
} */

// creating store
export const store = configureStore({
    reducer: rootReducer,
});

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);