import { INDEX } from "../constants/constants"

const initialState={
    index:0
}

const indexReducer=(state=initialState,action)=>{
    switch(action.type){
        case INDEX:
            return {
                ...state,
                index:action.payload
            }
        default: return state
    }
}

export default indexReducer