import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Component/Hero.css";
import backgroundImage from "../Screen/Rectangle.jpg";
import API_URL from "../apiPoint";

const LoginAsStudent = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(API_URL + "/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      // 🧠 Role check
      if (res.data.user.role !== "student") {
        setMessage(
          "❌ Access Denied! Please use the correct login page for your role."
        );
        return;
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setMessage("✅ Login successful! Redirecting...");
      setTimeout(() => navigate("/Hero"), 1000);
    } catch (err) {
      console.error(err);
      setMessage("❌ " + (err.response?.data?.message || "Login failed"));
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
                  Login as Student
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="E-mail"
                      name="email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-warning py-2">
                      Login
                    </button>
                  </div>
                  {message && (
                    <p className="text-center text-info">{message}</p>
                  )}
                  <p className="text-center mt-3 mb-0 text-white-50">
                    Don’t have an account?{" "}
                    <Link
                      to="/RegisterAsStudent"
                      className="link-warning text-decoration-none"
                    >
                      Register
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
};

export default LoginAsStudent;
