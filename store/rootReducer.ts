import { HYDRATE } from "next-redux-wrapper"
import { combinedReducer } from "./combinedReducer"

export const rootReducer = (state: any, action: any) => {
    if(action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        if(state.count.count) {
            // preserve count value on client side navigation
            nextState.count.count = state.count.count;
        }
        return nextState;
    }
    else {
        return combinedReducer(state, action);
    }
}