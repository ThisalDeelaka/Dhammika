// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <section id="header">
      <nav className="navbar navbar-expand-md navbar-light shadow_box bg-white p-0" id="navbar_sticky">
        <div className="container-xl">
          <a className="navbar-brand p-0 fw-bold text-uppercase" href="index.html">
            <i className="fa fa-graduation-cap col_oran"></i> Coll<span className="col_oran">ege</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-0 ms-auto">
              <li className="nav-item"><a className="nav-link active" href="index.html">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
              {/* Add other links similarly */}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
