import { combineReducers } from "@reduxjs/toolkit";
import counter from "./count/reducer";
import toggler from "./toggle/reducer";

export const combinedReducer = combineReducers({
    counter,
    toggler,
});