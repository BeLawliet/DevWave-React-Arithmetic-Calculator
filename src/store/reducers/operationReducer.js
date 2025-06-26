const initialState = {

}

export const operationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {}
        default:
            return state;
    }
}
