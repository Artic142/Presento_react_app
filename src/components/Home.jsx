// components/Home.js
import React from 'react';

const Home = () => {
    return (
        <>
              <section className="hero d-flex align-items-center">
                <div className="container-home text-white p-5">
                    <h1 className="fw-bold">Better digital<br />experience with<br />Presento</h1>
                    <p className="lead">We are team of talented designers making websites with Bootstrap</p>
                    <div className="d-flex align-items-center gap-3 mt-3">
                        <a href="/" className="btn btn-danger">Get Started</a>
                        <a href="/" className="btn btn-outline-light d-flex align-items-center gap-2">
                            <i className="fa-solid fa-circle-play"></i> Watch Video
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
