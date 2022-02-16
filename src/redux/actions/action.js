import { ADD, DELETE, EDIT, SHOW } from "../constants/constants"

export const editData=(payload)=>{
    console.log(payload);
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