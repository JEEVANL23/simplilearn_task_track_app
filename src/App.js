
import {Provider} from "react-redux"
import Navigation from "./Component/Navigation";
import Store from "./redux/store"
import "./App.css"
import Home from "./Component/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import TaskManage from "./Component/TaskManage";
import Username from "./Component/Username";
import Login from "./Component/Login"
import Footer from "./Component/Footer";
function App() {
  return (
    <BrowserRouter>
    
      <Provider store={Store}>
        
          
        
        <Navigation/>
        <Username/>
        <div className="container">
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/taskmanage" element={<TaskManage/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        </div>
        <Footer/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
