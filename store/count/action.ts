export const countActionTypes = {
    ADD: "ADD",
    SUBTRACT: "SUBTRACT",
}

export const addCount = () => (dispatch: any) => {
    return dispatch({ type: countActionTypes.ADD })
}

export const removeCount = () => (dispatch: any) => {
    return dispatch({ type: countActionTypes.SUBTRACT })
}