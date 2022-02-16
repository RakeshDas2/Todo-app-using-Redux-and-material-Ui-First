import {  UPDATE } from "../constants/constants"

const initialState={
    task:'',
    completed:false
}

const objectReducer=(state=initialState,action)=>{
    switch(action.type){
        case UPDATE:
            return{
                ...state,
                task:action.payload.task,
                completed:action.payload.completed
            }
           
            default: return state
    }
}

export default objectReducer