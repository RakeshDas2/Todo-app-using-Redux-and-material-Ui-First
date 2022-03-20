import { ADD, COMPLETED, DELETE, EDIT } from "../constants/constants"

const initialState = {
    finalData: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            const newArray = [...state.finalData]
            const findIndex = newArray.findIndex(ele => {
                return ele.task === action.payload.task
            })

            if (findIndex === -1) {
                newArray.push(action.payload)
            } else {
                console.log('Task already added');
            }
            return {
                ...state,
                finalData: newArray
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
            const finalDataCopy = [...state.finalData]
            finalDataCopy[action.payload.index] = action.payload.upData
            return {
                ...state,
                finalData: finalDataCopy
            }

        case COMPLETED:
            const updatedDataCopy = [...state.finalData]
            console.log(updatedDataCopy[action.payload]);
            updatedDataCopy[action.payload].completed = !updatedDataCopy[action.payload].completed
            return {
                ...state,
                finalData: updatedDataCopy
            }

        default: return state
    }
}

export default todoReducer;
