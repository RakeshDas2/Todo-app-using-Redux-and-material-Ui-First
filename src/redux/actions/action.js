import { ADD, COMPLETED, DELETE, EDIT, INDEX, SHOW, UPDATE } from "../constants/constants"

export const editData=(payload)=>{
    return {
        type:EDIT,
        payload
    }
}

export const deleteData=(payload)=>{
    return {
        type:DELETE,
        payload
    }
}

export const addData=(payload)=>{
   
    return {
        type:ADD,
        payload
    }
}

export const showDialoge=(payload)=>{
    return {
        type:SHOW,
        payload
    }
}

export const updateIndex=(payload)=>{
    return{
        type:INDEX,
        payload
    }
}

export const updateObject=(payload)=>{
    return {
        type:UPDATE,
        payload
    }
}

export const completedTask=(payload)=>{
    return{
        type:COMPLETED,
        payload
    }
}