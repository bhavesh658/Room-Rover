import React from 'react'
import { Link } from 'react-router-dom'
export const LoginAsOwner = () => {

  return (
     <div className="container text-align-center justify-content-center w-50    border border-danger rounded p-5 mt-5 ">
      <form  >
 

        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Email</label>
          <input type="email" className="form-control" id="emailInput" name='email'  />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">Password</label>
          <input type="password" className="form-control" id="passwordInput" name='password'  />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/Signup" className='m-3 btn btn-danger'>I am new user</Link>
         <Link to="../Hero" className='m-3 btn btn-primary'>Back to Home</Link>
      </form>
    </div>
  )
}
