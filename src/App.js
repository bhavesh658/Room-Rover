import './App.css';
// import { DataBoard } from './Component/DataBoard';
import Hero from './Component/Hero';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './Component/Navbar';
import { LoginAsStudent } from './Screen/LoginAsStudent';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { LoginAsOwner } from './Screen/LogInOwner';
import Aboutus from './Component/Aboutus';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        {/* <Route exact path='/' element={<Navbar/>}/> */}
                <Route exact path='/' element={<Hero/>}/>
                <Route exact path='/LoginAsStudent' element={<LoginAsStudent/>}/>
                <Route exact path='/LoginAsOwner' element={<LoginAsOwner/>}/>
                <Route exact path='/about' element={<Aboutus/>}/>
        </Routes>
        {/* <DataBoard/> */}

      </div>
     
    </Router>
  )
}

export default App;