const initialState = {
    sample: [],
    loading: true,
};

const basicReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch(action.type) {
        case "get":
            return {
                ...state,
                sample: action.payload,
                loading: false,
            };

        case "error":
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default basicReducer;