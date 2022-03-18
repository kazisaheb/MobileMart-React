import React, { useState } from 'react';
import Products from '../Products/Products';

const Header = () => {

  const [kws, setKws] = useState('')

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">MobileMart</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Products</a>
              </li>
            </ul>
            <form className="d-flex">
              <input

                value={kws}
                onChange={(e) => setKws(e.target.value)}

                className="form-control me-2" type="search" placeholder="Search mobile" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav >
      <Products keywords={kws} />
    </div >
  );
};

export default Header;