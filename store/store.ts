import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import basicReducer from "./reducers/basicReducer";
import { combineReducers } from 'redux'

const reducers = combineReducers({
    basicReducer
});

// creating store
export const store = configureStore({
    reducers,
});

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);