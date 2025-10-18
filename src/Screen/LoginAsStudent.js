import '../Component/Hero.css';
import backgroundImage from '../Screen/Rectangle.jpg';
import { Link } from 'react-router-dom';

export default function LoginAsStudent() {

  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
  }
  return (
    <>
      <div className="background-image-container d-flex align-items-center justify-content-center vh-100" style={heroStyle}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
              <div className="card p-4 shadow bg-dark text-white bg-opacity-75">
                <div className="card-body">
                  <h3 className="card-title text-center mb-4">Login as a Student</h3>
                  <form>
                    <div className="row g-3 mb-3">

                    </div>
                    <div className="mb-3">
                      <input type="email" className="form-control" placeholder="E-mail" aria-label="E-mail" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="passwordInput" className="form-label">Password</label>
                      <input type="password" className="form-control" id="passwordInput" name='password' />
                    </div>
                    <div className="d-grid mb-3">
                      <button type="submit" className="btn btn-warning py-2">Login</button>
                    </div>
                    <p className="text-center mt-3 mb-0 text-white-50">Don`t have any account? <Link to="/RegisterAsStudent" className="link-warning text-decoration-none">Register</Link></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}