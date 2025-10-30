import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function PropertyLists() {
  const { type } = useParams();  // "hostel" | "pg" | "flat" | "mess"
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/properties/type/${type}`);
        setProperties(res.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
      }
    };
    fetchProperties();
  }, [type]);

  return (
    <div className="container py-5">
      <h2 className="text-center text-warning mb-4 text-uppercase">{type} Properties</h2>
      <div className="row">
        {properties.map((prop) => (
          <div key={prop._id} className="col-md-4 mb-4">
            <div className="card shadow-lg h-100">
              <img
                src={prop.image}
                alt={prop.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-warning fw-bold">{prop.name}</h5>
                <p className="card-text">
                  📍 {prop.location}<br />
                  💰 ₹{prop.rent}/month
                </p>
                <Link to={`/property/${prop._id}`} className="btn btn-dark w-100">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
