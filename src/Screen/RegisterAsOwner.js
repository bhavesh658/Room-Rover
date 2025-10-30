import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Component/Hero.css";
import backgroundImage from "../Screen/Rectangle.jpg";

export default function RegisterAsOwner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // ✅ moved inside component

  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      delete formData.password;

      // 👇 send data to backend
      // const res = await axios.post("http://localhost:5000/api/auth/register", {
      //   name: formData.name,
      //   email: formData.email,
      //   password: formData.password,
      //   role: "owner",
      // });

      setMessage("✅ Registered successfully!");

      // ✅ Save token & redirect
      // localStorage.setItem('token', res.data.token);
      localStorage.setItem("user", JSON.stringify(formData));
      navigate("/");
    } catch (err) {
      console.error(err);
      setMessage(
        "❌ " + (err.response?.data?.message || "Registration failed")
      );
    }
  };

  return (
    <div
      className="background-image-container d-flex align-items-center justify-content-center vh-100"
      style={heroStyle}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <div className="card p-4 shadow bg-dark text-white bg-opacity-75">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">
                  Register as an Owner
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full name"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="E-mail"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Phone number"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-warning py-2">
                      Register
                    </button>
                  </div>
                  {message && (
                    <p className="text-center text-info">{message}</p>
                  )}
                  <p className="text-center mt-3 mb-0 text-white-50">
                    Already have an account?{" "}
                    <Link
                      to="/LoginAsOwner"
                      className="link-warning text-decoration-none"
                    >
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
