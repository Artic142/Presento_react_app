// components/About.js
import React from 'react';
import { NavLink } from 'react-router-dom';


const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container-about">
          <div className="row mb-5">
            <div className="col-lg-5 m-5">
              <h2 className="fw-bold">Voluptatem dignissimos provident quasi</h2>
              <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
              <NavLink to="/about" className="btn btn-outline-danger mt-4">About Us <i className="fas fa-arrow-right ms-2"></i></NavLink>
            </div>
            <div className="col-lg-6 row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <div className="icon-box">
                  <div className="icon-about"><i className="fas fa-briefcase"></i></div>
                  <h5 className="fw-bold">Corporis voluptates sit</h5>
                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
              </div>
              <div className="col">
                <div className="icon-box">
                  <div className="icon-about"><i className="fas fa-gem"></i></div>
                  <h5 className="fw-bold">Ullamco laboris nisi</h5>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
              </div>
              <div className="col">
                <div className="icon-box">
                  <div className="icon-about"><i className="fas fa-signal"></i></div>
                  <h5 className="fw-bold">Labore consequatur</h5>
                  <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
              </div>
              <div className="col">
                <div className="icon-box">
                  <div className="icon-about"><i className="fas fa-desktop"></i></div>
                  <h5 className="fw-bold">Beatae veritatis</h5>
                  <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="counts-wrapper">
        <div className="container-count">
          <div className="row text-center counts">
            <div className="col-md-3">
              <div className="count-box">
                <i className="fas fa-smile"></i>
                <span>50</span>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="count-box">
                <i className="fas fa-file-alt"></i>
                <span>30</span>
                <p>Projects</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="count-box">
                <i className="fas fa-headset"></i>
                <span>145</span>
                <p>Hours Of Support</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="count-box">
                <i className="fas fa-users"></i>
                <span>15</span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;