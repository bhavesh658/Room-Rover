import './App.css';
// import { DataBoard } from './Component/DataBoard';
import Hero from './Component/Hero';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import Navbar from './Component/Navbar';
import { Login } from './Screen/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
        {/* <Route exact path='/' element={<Navbar/>}/> */}
                <Route exact path='/' element={<Hero/>}/>
                <Route exact path='/Login' element={<Login/>}/>
        </Routes>
        {/* <DataBoard/> */}

      </div>
     
    </Router>
  )
}

export default App;