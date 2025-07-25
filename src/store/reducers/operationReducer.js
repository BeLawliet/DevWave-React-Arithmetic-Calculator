import { OPERATION_CALCULATE, OPERATION_HISTORY, OPERATION_HISTORY_DELETE, OPERATION_HISTORY_EDIT } from "../utils";

export const operationReducer = (state = [], action) => {
    switch (action.type) {
        case OPERATION_CALCULATE:
            return [ action.payload, ...state ];
        case OPERATION_HISTORY:
            return [ ...action.payload ];
        case OPERATION_HISTORY_DELETE:
            return state.filter(operation => operation.id !== action.payload.id);
        case OPERATION_HISTORY_EDIT:
            return state.map(operation => operation.id === action.payload.id ? action.payload : operation);
        default:
            return state;        
    }
}
