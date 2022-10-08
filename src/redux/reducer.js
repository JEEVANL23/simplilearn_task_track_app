
const initialState={
  names:"user",
  tasks:[{id:1,name:"Navigation bar",day:4},{id:2,name:"Footer",day:5}]
}

const Reducer = (state=initialState,action) => {
  switch(action.type){
    case "ADD_TASK":
      
      return{
        ...state,
        
        tasks:[...state.tasks,action.payload]
      }
    case "DELETE_TASK":
      return{
        ...state,
        tasks:state.tasks.filter(task=>task.id!==action.payload)
      }
    case "ADD_USER":
      return{
        ...state,
        names:action.payload
      }
    default:
        return state
  }
}
export default Reducer
