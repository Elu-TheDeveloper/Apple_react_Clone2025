import React from "react";
import logox from "@/assets/images/icons/logo-sm.png";
import searchlogo from "@/assets/images/icons/search-icon-sm.png";
import cartlogo from "@/assets/images/icons/cart-sm.png";

import { Link } from "react-router-dom"; 

function Header() {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          <Link className="navbar-brand mx-auto" to="/">
            <img src={logox} alt="Logo" />
          </Link>

          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
            <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Store">
                  Store
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/mac">
                  Mac
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/iphone/">
                  iPhone
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/ipad/">
                  iPad
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/watch/">
                  Watch
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/tv">
                  TV
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/vision">
                  Vision
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Airpod">
                  Airpod
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/music">
                  Music
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/search">
                  <img src={searchlogo} alt="Search" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/cart">
                  <img src={cartlogo} alt="Cart" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
