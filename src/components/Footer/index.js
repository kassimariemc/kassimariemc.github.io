import React from "react";
import "./style.css";

function Footer() {
  return (
    // <!-- Footer -->
    <div>
      <hr className="bottom-red-line"/>
        <footer className="nav sticky-bottom justify-content-center">
          <ul className="navbar">
            <li className="nav-item">
              <a className="nav-link" target="_blank" rel="noreferrer" href="https://github.com/kassimariemc"><i
                className="fa fa-github fa-2x"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kassi-stumb/"><i
                className="fa fa-linkedin-square fa-2x"></i></a>
            </li>
          </ul>
          <div className="container-fluid text-center text-muted">Copyright &#169; Kassi Stumb</div>
        </footer>
    </div>
  );
}

export default Footer;