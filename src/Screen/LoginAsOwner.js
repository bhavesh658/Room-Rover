// import '../Component/Hero.css';
// import backgroundImage from '../Screen/Rectangle.jpg';
// import { Link } from 'react-router-dom';

// const LoginAsOwner = () => {

//   const heroStyle = {
//     backgroundImage: `url(${backgroundImage})`,
//   }
//   return (
//     <>
//       <div className="background-image-container d-flex align-items-center justify-content-center vh-100" style={heroStyle}>
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
//               <div className="card p-4 shadow bg-dark text-white bg-opacity-75">
//                 <div className="card-body">
//                   <h3 className="card-title text-center mb-4">Login as an Owner</h3>
//                   <form>
//                     <div className="row g-3 mb-3">

//                     </div>
//                     <div className="mb-3">
//                       <input type="email" className="form-control" placeholder="E-mail" aria-label="E-mail" />
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="passwordInput" className="form-label">Password</label>
//                       <input type="password" className="form-control" id="passwordInput" name='password' />
//                     </div>
//                     <div className="d-grid mb-3">
//                       <button type="submit" className="btn btn-warning py-2">Login</button>
//                     </div>
//                     <p className="text-center mt-3 mb-0 text-white-50">Don`t have any account? <Link to="/RegisterAsOwner" className="link-warning text-decoration-none">Register</Link></p>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default LoginAsOwner;
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Component/Hero.css';
import backgroundImage from '../Screen/Rectangle.jpg';

const LoginAsOwner = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // send login request to backend
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      // save token in local storage
      localStorage.setItem('token', res.data.token);

      setMessage('✅ Login successful! Redirecting...');
      console.log(res.data);

      // redirect to owner dashboard after 1s
      setTimeout(() => navigate('/Hero'), 1000);
    } catch (err) {
      console.error(err);
      setMessage('❌ ' + (err.response?.data?.message || 'Login failed'));
    }
  };

  return (
    <>
      <div
        className="background-image-container d-flex align-items-center justify-content-center vh-100"
        style={heroStyle}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
              <div className="card p-4 shadow bg-dark text-white bg-opacity-75">
                <div className="card-body">
                  <h3 className="card-title text-center mb-4">Login as an Owner</h3>
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
                      Don’t have an account?{' '}
                      <Link
                        to="/RegisterAsOwner"
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
    </>
  );
};

export default LoginAsOwner;
