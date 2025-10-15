// import { Link } from "react-router-dom"

// export default function Navbar() {
//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                 <div className="container-fluid">
//                     <div className="navbar-brand fw-bold" href="/"><i className="bi bi-house-door"></i></div>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarScroll">
//                         <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ maxHeight: '100px' }}>
//                             <li className="nav-item">
//                                 <Link className="btn btn-outline-light me-2 " type="button">Rent Rover</Link>
//                             </li>
                           
                            
//                         </ul>
                       
//                         <form className="d-flex mx-auto">
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button className="btn btn-outline-primary" type="submit">Search</button>
//                         </form>
                        
                
//                         <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-4 ">
//                             <li className="nav-item px-4">
//                                 <button type="button" className="btn btn-danger">Log In</button>
//                             </li>
//                              <li className="nav-item px-1">
//                                 <button type="button" className="btn btn-danger">Sign In</button>
//                             </li>
                           
                            
//                             <li className="nav-item dropdown">
//                                 <Link className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Username
//                                 </Link>
//                                 <ul className="dropdown-menu" aria-labelledby="userDropdown">
//                                     <li><Link className="dropdown-item" href="#">Profile</Link></li>
//                                     <li><Link className="dropdown-item" href="#">Settings</Link></li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li><Link className="dropdown-item" href="#">Logout</Link></li>
//                                 </ul>
//                             </li>
                        
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }