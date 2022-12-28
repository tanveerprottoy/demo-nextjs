import { combineReducers } from "@reduxjs/toolkit";
import count from "./count/reducer";

export const combinedReducer = combineReducers({
    count
});