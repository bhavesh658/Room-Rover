// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function OwnerHome() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [myProperties, setMyProperties] = useState([]);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("user"));
//     if (!stored) {
//       navigate("/OwnerStudentLogin");
//       return;
//     }
//     // Must be owner
//     if (stored.role !== "owner") {
//       alert("Access denied: owners only");
//       navigate("/");
//       return;
//     }
//     setUser(stored);

//     // fetch properties by ownerId
//     (async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/properties/owner/${stored.id || stored._id}`);
//         setMyProperties(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     })();
//   }, [navigate]);

//   return (
//     <div className="container py-5">
//       <h2 className="mb-3">Welcome, {user?.name}</h2>
//       <Link to="/owner/upload" className="btn btn-warning mb-4">+ Upload New Property</Link>

//       <div className="row">
//         {myProperties.length === 0 && <p>No properties yet.</p>}
//         {myProperties.map(prop => (
//           <div className="col-md-4 mb-3" key={prop._id}>
//             <div className="card h-100">
//               <img src={prop.image} className="card-img-top" style={{height:200, objectFit:'cover'}} alt={prop.name} />
//               <div className="card-body">
//                 <h5 className="card-title">{prop.name}</h5>
//                 <p className="card-text">₹{prop.rent} · {prop.type}</p>
//                 <p className="card-text small text-muted">{prop.location}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function OwnerHome() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [myProperties, setMyProperties] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    if (!stored) {
      navigate("/OwnerStudentLogin");
      return;
    }
    if (stored.role !== "owner") {
      alert("Access denied: owners only");
      navigate("/");
      return;
    }
    setUser(stored);

    // Fetch owner properties (with booked student info)
    (async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/properties/owner/${stored.id || stored._id}`
        );
        setMyProperties(res.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [navigate]);

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/OwnerStudentLogin");
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Welcome, {user?.name}</h2>
        {/* <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button> */}
      </div>

      <Link to="/owner/upload" className="btn btn-warning mb-4">
        + Upload New Property
      </Link>

      <div className="row">
        {myProperties.length === 0 && <p>No properties yet.</p>}
        {myProperties.map((prop) => (
          <div className="col-md-4 mb-3" key={prop._id}>
            <div className="card h-100 shadow-sm">
              <img
                src={prop.image}
                className="card-img-top"
                style={{ height: 200, objectFit: "cover" }}
                alt={prop.name}
              />
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-between align-items-center">
                  {prop.name}
                  {prop.booked && (
                    <span className="badge bg-success">Booked</span>
                  )}
                </h5>
                <p className="card-text">₹{prop.rent} · {prop.type}</p>
                <p className="card-text small text-muted">{prop.location}</p>

                {/* ✅ Show student details if booked */}
                {prop.booked && prop.bookedBy && (
                  <div className="mt-3 border-top pt-2">
                    <h6>Booked by:</h6>
                    <p className="mb-1"><b>Name:</b> {prop.bookedBy.name}</p>
                    <p className="mb-0"><b>Email:</b> {prop.bookedBy.email}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
