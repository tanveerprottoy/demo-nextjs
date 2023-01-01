import { countActionTypes } from './action'

const countInitialState = {
    count: 0,
}

export default function counterReducer(state = countInitialState, action: any) {
    switch(action.type) {
        case countActionTypes.ADD:
            return Object.assign({}, state, {
                count: state.count + 1,
            })
        case countActionTypes.SUBTRACT:
            return Object.assign({}, state, {
                count: state.count > 0 ? state.count - 1 : 0,
            })
        default:
            return state
    }
}