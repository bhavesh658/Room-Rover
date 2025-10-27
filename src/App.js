import './App.css';
// import { DataBoard } from './Component/DataBoard';
import Hero from './Component/Hero';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import Navbar from './Component/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginAsOwner from './Screen/LoginAsOwner';
import Aboutus from './Component/Aboutus';
import RegisterAsStudent from './Screen/RegisterAsStudent';
import LoginAsStudent from './Screen/LoginAsStudent';
import RegisterAsOwner from './Screen/RegisterAsOwner';
import Flatpage from './Component/Flatpage';
import Contactus from './Component/Contactus';
import OwnerStudentLogin from './Screen/OwnerStudentLogin';
import OwnerStudentRegister from './Screen/OwnerStudentRegister';

function App() {  
  return (
    <Router>
      <div>
        <Routes>
          {/*  */}
          <Route exact path='/' element={<Hero />} />
          <Route exact path='/RegisterAsStudent' element={<RegisterAsStudent />} />
          <Route exact path='/RegisterAsOwner' element={<RegisterAsOwner />} />
          <Route exact path='/LoginAsOwner' element={<LoginAsOwner />} />
          <Route exact path='/LoginAsStudent' element={<LoginAsStudent />} />
          <Route exact path='/about' element={<Aboutus />} />
          <Route exact path='/contact' element={<Contactus/>}/>
          {/* <Route exact path='/OwnerStudent' element={<OwnerStudent />} /> */}
          <Route path='/flat' element={<Flatpage/>} />
          
          <Route exact path='/OwnerStudentLogin' element={<OwnerStudentLogin />} />
          <Route exact path='/OwnerStudentRegister' element={<OwnerStudentRegister />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path='/flat' element={<Flatpage />} />

        </Routes>

      </div>

    </Router>
  )
}

export default App;