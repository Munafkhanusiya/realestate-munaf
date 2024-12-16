import React from "react";
import style from "./Manu.module.css";
import Logo from "../../Images/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
function New_bar() {
  return (
    <>
      <nav
        className={[style.Navbar, "navbar navbar-expand-lg navbar-light"].join( " " )}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="" />

          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={[style.Active, "nav-link active"].join(" ")}
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={[style.lilist, "nav-link active"].join(" ")}
                  href="#careers"
                >
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={[style.lilist, "nav-link active"].join(" ")}
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={[style.lilist, "nav-link active"].join(" ")}
                  href="#security"
                >
                  Security
                </a>
              </li>
            </ul>
            <div className={style.btnWrapper}>
              <button className={style.contactBtn}>Contact Us</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default New_bar;
