import { useDispatch, useSelector } from 'react-redux'
import { deletetask,addtask } from '../redux/Action'
import { useState} from "react"
export default function TaskManage() {
  
    const [name,setName]=useState("")
    const [data,setData]=useState("")
    const [days,setDays]=useState("")
    const tasks=useSelector(state=>state.tasks)
    const dispatch=useDispatch()
    const hellow=(a,b,days)=>{
        setData({id:b,name:a,day:days})
    }
    const changed=(e)=>{
        setName(e.target.value)
        
    }
    const changeday=(e)=>{
        setDays(e.target.value)
        
        hellow(name,tasks.length+1,e.target.value)
    }
   
     
  return (
    <div>
        
        <div style={{backgroundColor:'aquamarine',marginTop:"10px", paddingTop:"10px",paddingBottom:"10px",textAlign:"center"}}>
           
              <h5>MANAGE YOUR TASK HERE</h5>
            </div>
          
        {tasks.map(task=>(
            <div className="card text-center" key={task.id}>
            <div className="card-header">
              TASK ASSIGNED
            </div>
            {
              
            }
            <div className="card-body" style={{alignItems:"center"}}>
              <h5 className="card-title">{task.name}</h5>
              <div>
              <ol className='tasklist'>
                <ol className='taskitem'><input type="checkbox" />SUB TASK</ol>
                <ol className='taskitem'><input type="checkbox"  />SUB TASK</ol>
                <ol className='taskitem'><input type="checkbox" />SUB TASK</ol>
                <ol className='taskitem'><input type="checkbox" />SUB TASK</ol>
              </ol>
                
            </div>
              
              
            </div>
            <button type="button" class="btn btn-success" style={{margin:"auto"}} onClick={()=>dispatch(deletetask(task.id))}>Submit Task</button>
            <div className="card-footer text-muted">
              {task.day} DAYS LEFT TO SUBMIT
            </div>
          </div>
        ))}
        <div className='posting'>

            <input type="text" className='form-control' placeholder='Enter New Task Name' onChange={changed} />
            <input type="text" className='form-control' placeholder='Days left to submit' onChange={changeday} />
            {name!==""&&
            <button type="button" 
            className="btn btn-outline-success" 
            style={{marginLeft:"45%",marginTop:"10px"}} onClick={()=>dispatch(addtask(data))}>Add Task</button>}
        </div>
        
    </div>
    
  )
}
