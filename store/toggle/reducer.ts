import { togglerActionTypes } from './action'

const isSetInitialState = {
    isSet: false,
}

export default function togglerReducer(state = isSetInitialState, action: any) {
    switch(action.type) {
        case togglerActionTypes.TOGGLE:
            return Object.assign({}, state, {
                isSet: state.isSet ? true : false,
            });
        default:
            return state;
    }
}