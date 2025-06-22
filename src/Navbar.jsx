// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="header navbar navbar-expand-lg d-flex align-items-center sticky-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">
                <NavLink to="/" className="logo d-flex align-items-center me-auto">
                    <h1 className="sitename text-dark">Presento</h1>
                    <span>.</span>
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-controls="navmenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <nav id="navmenu" className="navmenu collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} style={{ color: 'red' }}>Home</NavLink></li>
                        <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
                        <li className="nav-item"><NavLink to="/services" className="nav-link">Services</NavLink></li>
                        <li className="nav-item"><NavLink to="/portfolio" className="nav-link">Portfolio</NavLink></li>
                        <li className="nav-item"><NavLink to="/team" className="nav-link">Team</NavLink></li>
                        <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                    </ul>
                    <br /><br />
                    <div id="get-started">
                        <button className="get-started btn btn-danger">Get Started</button>
                    </div>
                </nav>
            </div>

        </header>
    );
};

export default Navbar;