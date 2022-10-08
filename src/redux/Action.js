export function addtask (data){
    
    return{
    type:"ADD_TASK",
    payload:data
    }
}
export function deletetask (data){
    
    return{
    type:"DELETE_TASK",
    payload:data
    }
}
export function user (data){
    
    return{
    type:"ADD_USER",
    payload:data
    }
}
