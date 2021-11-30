import { ADD, DELETE, DONE } from "./action-types"


export const deleteHandler=(ID)=>{
return {
    type:DELETE,
    payload:ID
}
}

export const doneHandler=(ID)=>{
return{
    type:DONE,
    payload:ID
}
}

export const addHandler=(newTodo)=>{
    return {
        type:ADD,
        payload:newTodo
    }
}