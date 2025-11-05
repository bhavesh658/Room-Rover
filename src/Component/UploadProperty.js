import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UploadProperty() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "", location: "", rent: "", type: "", image: ""
  });

  const user = JSON.parse(localStorage.getItem("user"));

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || user.role !== "owner") {
      alert("You must be logged in as an owner to upload.");
      return;
    }
    try {
      const payload = {
        ...form,
        owner: user.name,
        ownerId: user.id || user._id
      };
      const res = await axios.post("http://localhost:5000/api/properties/add", payload);
      alert(res.data.message || "Uploaded");
      navigate("/owner/home");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="container py-4">
      <h3 className="mb-3">Upload Property</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Property Name</label>
          <input name="name" onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input name="location" onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3 row">
          <div className="col">
            <label className="form-label">Rent</label>
            <input name="rent" type="number" onChange={handleChange} className="form-control" required />
          </div>
          <div className="col">
            <label className="form-label">Type</label>
            <select name="type" onChange={handleChange} className="form-select" required>
              <option value="">Select</option>
              <option value="hostel">Hostel</option>
              <option value="pg">PG</option>
              <option value="flat">Flat</option>
              <option value="mess">Mess</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input name="image" onChange={handleChange} className="form-control" required />
        </div>
        <button className="btn btn-warning text-white">Upload</button>
      </form>
    </div>
  );
}
