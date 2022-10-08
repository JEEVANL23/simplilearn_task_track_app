import React from 'react'
import {Link} from "react-router-dom"
export default function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand ml-5" href="/"><i class="bi bi-list-task"></i>TASK TRACK</a>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse floatitems" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">Home </Link>
            <Link className="nav-item nav-link" to="/taskmanage">Task Manage</Link>
            <Link className="nav-item nav-link" to="/login">Log In</Link>
            <Link className="nav-item nav-link disabled" to="#">Settings</Link>
           
          </div>
        </div>
        
    </nav>
    
    </div>
  )
}
