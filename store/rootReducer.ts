import { HYDRATE } from "next-redux-wrapper"
import { combinedReducer } from "./combinedReducer"

export const rootReducer = (state: any, action: any) => {
    if(action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        /* if(state.counter.count) {
            // preserve count value on client side navigation
            nextState.counter.count = state.counter.count;
        }
        if(state.toggler.isSet) {
            nextState.toggler.isSet = state.toggler.isSet;
        } */
        return nextState;
    }
    else {
        return combinedReducer(state, action);
    }
}