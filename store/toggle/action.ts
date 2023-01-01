export const togglerActionTypes = {
    TOGGLE: "TOGGLE",
};

export const toggle = () => (dispatch: any) => {
    return dispatch({ type: togglerActionTypes.TOGGLE })
};
