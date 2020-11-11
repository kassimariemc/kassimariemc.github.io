import React from "react";
import "./style.css";

function Contact() {
  return (
    // <!-- Contact Section-->
    <main className="container" id="contact">
      <div className="row">

        <section className="col-lg-12 section-border">
          <div className="page-header">
            <h1 className="text-center">I'd love to hear from you!</h1>
          </div>

          <div className="page-header">
            <hr />
          </div>

          <div className="text-center">
            <a href="mailto:kassi.mcintosh@gmail.com"><button type="button" className="btn btn-lg" id="uni-btn">Email
                Me</button></a>
          </div>

        </section>

      </div>
    </main>
  );
}

export default Contact;