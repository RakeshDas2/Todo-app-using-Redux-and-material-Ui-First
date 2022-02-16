import { ADD, DELETE, EDIT } from "../constants/constants"

const initialState = {
    finalData: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                finalData: [
                    ...state.finalData,
                    action.payload
                ]
            }

        case DELETE:
            const newFianlData = state.finalData.filter((ele, index) => {
                return index !== action.payload
            })
            return {
                ...state,
                finalData: newFianlData
            }

            case EDIT:
                const finalDataCopy=[...state.finalData]
                finalDataCopy[action.payload.index]=action.payload.upData
                 return {
                     ...state,
                     finalData:finalDataCopy
                 }

        default: return state
    }
}

export default todoReducer;
