import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import API_URL from "../apiPoint";

export default function PropertyLists() {
  const { type } = useParams(); // "hostel" | "pg" | "flat" | "mess"
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/properties/type/${type}`);
        setProperties(res.data);
      } catch (err) {
        console.error("❌ Error fetching properties:", err);
      }
    };
    fetchProperties();
  }, [type]);

  return (
    <div className="container py-5">
      <h2 className="text-center text-warning mb-4 text-uppercase">
        {type} Properties
      </h2>

      {properties.length === 0 ? (
        <h5 className="text-center text-muted">No properties found</h5>
      ) : (
        <div className="row g-4">
          {properties.map((prop) => (
            <div
              key={prop._id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
            >
              <div className="card shadow-sm border-0 flex-fill hover-shadow transition-all">
                <img
                  src={prop.image}
                  alt={prop.name}
                  className="card-img-top rounded-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-warning fw-bold mb-2 text-truncate">
                    {prop.name}
                  </h5>
                  <p className="card-text text-muted small flex-grow-1">
                    📍 {prop.location}
                    <br />
                    💰 ₹{prop.rent}/month
                  </p>
                  <Link
                    to={`/property/${prop._id}`}
                    className="btn btn-outline-warning mt-auto w-100 fw-semibold"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
