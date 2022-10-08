import React from 'react'
import { useDispatch } from 'react-redux'
import {user} from "../redux/Action"
import {useState} from "react"

export default function Login() {
    const dispatch=useDispatch()
    const [name,setName]=useState("")
    const changed=(e)=>{setName(e.target.value)}
  return (
    <div className="login">
        <div className="loginleft">
            <h4 style={{margin:"20px"}}>LOG IN </h4>
            <input type="text" className='form-control' placeholder='User Name' style={{marginBottom:"20px"}} onChange={changed}/>
            <input type="password" className='form-control' placeholder='password' style={{marginBottom:"20px"}}/>
            <button type="button" className='btn btn-secondary'onClick={()=>dispatch(user(name))} style={{width:"50%",marginBottom:"10px"}}>Submit</button>

            <p> Don't have a account?   <a href='#'>  click here  </a></p>

        </div>
        

    </div>
  )
}
