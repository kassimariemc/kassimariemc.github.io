import React from "react";
import "./style.css";

function Nav() {
  function scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
  
  function scrollToPortfolio(x) {
    if (x.matches) { // If media query matches
      window.scroll({ top: 2500, left: 0, behavior: 'smooth' });
    }
    else if (y.matches) {
      window.scroll({ top: 1800, left: 0, behavior: 'smooth' });
    }
    else {
      window.scroll({ top: 1500, left: 0, behavior: 'smooth' });
    }
  }
  
  function scrollToContact(x) {
    window.scroll({ top: 15000, left: 0, behavior: 'smooth' });
  }
  
  const x = window.matchMedia("(max-width: 600px)");
  const y = window.matchMedia("(max-width: 1025px)");

  return (
    // <!-- Bootstrap Nav Bar-->
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <div className="container">

        {/* <!-- Kassi Stumb --> */}
      <button className="navbar-brand" type="button" id="logo" onClick={scrollToTop()}>Kassi <br /> Stumb</button>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Links --> */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link" type="button" onClick={scrollToTop}>About Me</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" type="button" onClick={() => scrollToPortfolio(x)}>Portfolio</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" type="button" onClick={() => scrollToContact(x)}>Contact</button>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Nav;