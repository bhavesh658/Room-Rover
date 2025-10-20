import './App.css';
// import { DataBoard } from './Component/DataBoard';
import Hero from './Component/Hero';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
//import Navbar from './Component/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginAsOwner from './Screen/LoginAsOwner';
import Aboutus from './Component/Aboutus';
import RegisterAsStudent from './Screen/RegisterAsStudent';
import LoginAsStudent from './Screen/LoginAsStudent';
import OwnerStudent from './Screen/OwnerStudent';
import RegisterAsOwner from './Screen/RegisterAsOwner';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route exact path='/' element={<Navbar/>}/> */}
          <Route exact path='/' element={<Hero />} />
          <Route exact path='/RegisterAsStudent' element={<RegisterAsStudent />} />
          <Route exact path='/RegisterAsOwner' element={<RegisterAsOwner />} />
          <Route exact path='/LoginAsOwner' element={<LoginAsOwner />} />
          <Route exact path='/LoginAsStudent' element={<LoginAsStudent />} />
          <Route exact path='/about' element={<Aboutus />} />
          <Route exact path='/OwnerStudent' element={<OwnerStudent />} />


        </Routes>
        {/* <DataBoard/> */
        /* {<PropertyList/>}  */}


      </div>

    </Router>
  )
}

export default App;