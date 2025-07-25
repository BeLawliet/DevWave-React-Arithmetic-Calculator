import { useContext, useReducer, useEffect } from "react";
import { OperationContext } from "./OperationContext";
import { operationReducer } from "../store/reducers/operationReducer";
import { AuthContext } from "./AuthContext";
import { OPERATION_CALCULATE, OPERATION_HISTORY } from "../store/utils";
import { calculateOperation, getOperationHistory } from "../store/services/operationService";

const init = () => {
    return JSON.parse(localStorage.getItem('operations')) || [];
}

export const OperationProvider = ({ children }) => {
    const [ operationState, dispatch ] = useReducer(operationReducer, [], init);
    const { accessToken } = useContext(AuthContext);

    useEffect(() => {
        localStorage.setItem('operations', JSON.stringify(operationState));
    }, [ operationState ]);

    const newOperation = async (data) => {
        const response = await calculateOperation(data, accessToken);

        dispatch({
            type: OPERATION_CALCULATE,
            payload: response
        });
    }

    const loadOperationHistory = async () => {
        const response = await getOperationHistory(accessToken);

        dispatch({
            type: OPERATION_HISTORY,
            payload: response.content
        });

        return operationState;
    }

    return (
        <OperationContext.Provider value={{ operationState, newOperation, loadOperationHistory }}>
            { children }
        </OperationContext.Provider>
    )
}

