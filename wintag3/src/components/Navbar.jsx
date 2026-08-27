import logo from "../assets/translogo.png";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { useState } from "react";
import { useCart } from "./CartContext";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const {totalItems} =useCart();
  
  return (
    <nav className="navbar navbar-expand-lg bg-light top-0 position-sticky py-2" style={{zIndex:"1000"}}>
      <div className="container-fluid px-3">
        <div className="row w-100 align-items-center m-0 d-lg-none">
          <div className="col-4 d-flex justify-content-start p-0">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#NavbarNav"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <span className="btn btn-light p-0 border-0">
                  <i className="bi bi-x-lg"></i>
                </span>
              ) : (
                <span className="navbar-toggler-icon"></span>
              )}
            </button>
          </div>

          <div className="col-4 d-flex justify-content-center p-0">
            <Link to="/" className="navbar-brand m-0">
              <img
                src={logo}
                alt="Logo"
                style={{ transform: "skew(-20deg)", width: "60px" }}
              />
            </Link>
          </div>

          <div className="col-4 d-flex justify-content-end align-items-center gap-3 p-0">
            <button className="btn btn-secondary border-1 p-1" type="button">
              <i className="bi bi-search"></i>
            </button>
            <Link to="/cart" className="position-relative text-decoration-none">
              <i className="bi bi-bag text-dark fs-4"></i>
              <span className="position-absolute start-100 top-0 translate-middle badge bg-dark rounded-pill">
                
              </span>
            </Link>
            <Link to="/login" className="text-dark text-decoration-none">
              <i className="bi bi-person fs-3"></i>
            </Link>
          </div>
        </div>

        <Link to="/" className="navbar-brand ms-5 d-none d-lg-flex">
          <img
            src={logo}
            alt="Logo"
            style={{ transform: "skew(-20deg)", width: "120px" }}
          />
        </Link>

        <div
          className="input-group my-auto d-none d-lg-flex ms-5 py-2"
          style={{ maxWidth: "650px" }}
        >
          <input type="text" className="form-control" placeholder="Search" />
          <button className="btn btn-secondary border-1" type="button">
            <i className="bi bi-search"></i>
          </button>
        </div>

        <div className="collapse navbar-collapse ms-lg-5 px-lg-5" id="NavbarNav">
          <ul className="navbar-nav gap-4 align-items-center my-3 my-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link fs-5 text-dark">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link fs-5 text-dark">
                SHOP NOW
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-flex justify-content-between align-items-center gap-5 me-5">
          <Link
            to="/wishlist"
            className="d-flex align-items-center justify-content-between position-relative text-decoration-none"
          >
            <i className="bi bi-heart fs-3 text-dark"></i>
            <span className="position-absolute start-0 top-0 ms-3 badge bg-dark">
            
            </span>
           
          </Link>
          <Link
            to="/cart"
            className="d-flex align-items-center justify-content-between position-relative text-decoration-none"
          >
            <i className="bi bi-bag text-dark fs-3 text-dark"></i>
            <span className="position-absolute start-0 top-0 ms-3 badge bg-dark">
              {totalItems || 0}
            </span>
           
          </Link>


          <div>
            <button className="btn btn-light border rounded-1">
              <Link
                to="/Auth"
                className="text-dark text-decoration-none fs-5 d-flex align-items-center justify-content-between"
              >
                <i className="bi bi-person fs-3 me-1"></i>
                <span>Login/Signup</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}