import "./App.css";
import Hero from "./Component/Hero";
import Aboutus from "./Component/Aboutus";
import RegisterAsStudent from "./Screen/RegisterAsStudent";
import LoginAsStudent from "./Screen/LoginAsStudent";
import RegisterAsOwner from "./Screen/RegisterAsOwner";
import LoginAsOwner from "./Screen/LoginAsOwner";
import Flatpage from "./Component/Flatpage";
import Contactus from "./Component/Contactus";
import OwnerStudentLogin from "./Screen/OwnerStudentLogin";
import OwnerStudentRegister from "./Screen/OwnerStudentRegister";
import BookingPage from "./Component/BookingPage";
import PropertyDetails from "./Component/PropertyDetails";
import PropertyLists from "./Component/PropertyLists";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import OwnerHome from "./Component/OwnerHome";
import UploadProperty from "./Component/UploadProperty";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // Hide Navbar on these routes
  const hideNavbarRoutes = [
    "/LoginAsOwner",
    "/LoginAsStudent",
    "/RegisterAsOwner",
    "/RegisterAsStudent",
    "/OwnerStudentLogin",
    "/OwnerStudentRegister",
  ];

  // Hide Footer on these routes
  const hideFooterRoutes = [
    "/LoginAsOwner",
    "/LoginAsStudent",
    "/RegisterAsOwner",
    "/RegisterAsStudent",
    "/OwnerStudentLogin",
    "/OwnerStudentRegister",
    "/owner/home",
    "/owner/upload",
  ];

  return (
    <div>
      {/* ✅ Show Navbar only if not hidden */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />

        {/* Authentication */}
        <Route path="/LoginAsOwner" element={<LoginAsOwner />} />
        <Route path="/LoginAsStudent" element={<LoginAsStudent />} />
        <Route path="/RegisterAsOwner" element={<RegisterAsOwner />} />
        <Route path="/RegisterAsStudent" element={<RegisterAsStudent />} />
        <Route path="/OwnerStudentLogin" element={<OwnerStudentLogin />} />
        <Route path="/OwnerStudentRegister" element={<OwnerStudentRegister />} />

        {/* Property Routes */}
        <Route path="/flat" element={<Flatpage />} />
        <Route path="/properties/:type" element={<PropertyLists />} />
        <Route path="/property/:id" element={<PropertyDetails />} />

        {/* Owner Routes */}
        <Route path="/owner/home" element={<OwnerHome />} />
        <Route path="/owner/upload" element={<UploadProperty />} />

        {/* Booking */}
        <Route path="/BookingPage" element={<BookingPage />} />
      </Routes>

      {/* ✅ Show Footer only if not hidden */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
