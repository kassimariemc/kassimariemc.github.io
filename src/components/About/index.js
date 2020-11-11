import React from "react";
import "./style.css";

function About(props) {
  return (
    // <!-- Main About Me Section-->
    <main className="container" id="about-me">
      <div className="row">

        <article title="about me" className="col-lg-12 section-border">

          <div className="page-header">
            <h1>The Nitty Gritty</h1>
          </div>

          <div className="page-header">
            <hr />
          </div>

          <div className="row">
            {/* <!-- Bio and Photo --> */}
            <div className="col-md-6">
              <img className="bio-image" src="../../images/kassi-pic.jpg" alt="Kassi Stumb" />
              <p className="bio-font">
                Hey there! <i className="fa fa-hand-paper-o"></i> My name is Kassi Stumb and I'm a Triangle-based event
                manager with web programming and development skills. I graudated from the heavenly University of North
                Carolina at Chapel Hill with a degree in Math, minor in Statistics and Latin (yup, the nerdiest of
                nerds). I have 10 years management experience and I'm always looking for a new challenge. Currently, I'm
                working toward becoming a Full Stack Developer through the UNC Coding Boot Camp. With a diverse set of
                skills, I'm able to customize beautiful, functional and responsive websites. I like to code things from
                scratch and enjoy seeing ideas brought to life. I look forward to collaborating with you!
              </p>
            </div>


            <div className="col-md-6">
              {/* <!-- Resume Button --> */}
              <div className="row">
                <div className="col-md-12 about-me-border">
                  <button type="button" className="btn btn-lg btn-block" data-toggle="modal" data-target="#exampleModal"
                    id="resume">Resume</button>
                </div>
              </div>

              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <img src="../../images/KStumb_Resume_Web_Online.jpg" width="100%" alt="Resume"></img>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Languages --> */}
              <div className="row">
                <div className="col-md-12 about-me-border">
                  <p className="tech-info mt-2 mb-2">
                    <strong>LANGUAGES I SPEAK</strong>
                  </p>
                </div>
              </div>

              <div className="row" title="about me">
                <div className="col-md-6 about-me-border">
                  <p className="tech-info">
                    <strong><u>FRONT END</u></strong>
                  </p>
                  <p className="tech-info">
                    <i className="fa fa-cog"></i>HTML<br /><i className="fa fa-cog"></i>CSS<br /><i
                      className="fa fa-cog"></i>JavaScript<br /><i className="fa fa-cog"></i>jQuery<br /><i
                      className="fa fa-cog"></i>Bootstrap<br /><i className="fa fa-cog"></i>AJAX<br /><i className="fa fa-cog"></i>React
                  </p>
                </div>
                <div className="col-md-6 about-me-border">
                  <p className="tech-info">
                    <strong><u>BACK END</u></strong>
                  </p>
                  <p className="tech-info">
                    <i className="fa fa-connectdevelop"></i>Node.js<br /><i className="fa fa-connectdevelop"></i>Express<br /><i
                      className="fa fa-connectdevelop"></i>ES6<br /><i className="fa fa-connectdevelop"></i>MySQL<br /><i
                      className="fa fa-connectdevelop"></i>Sequelize<br /><i className="fa fa-connectdevelop"></i>MongoDB<br />
                    <i className="fa fa-connectdevelop"></i>IndexDB<br /><i className="fa fa-connectdevelop"></i>Service Worker<br /><i className="fa fa-connectdevelop"></i>MERN
                  </p>
                </div>
              </div>
              {/* <!-- Hobbies --> */}
              <div className="row" title="about me">
                <div className="col-md-12 about-me-border">
                  <p className="hobbies">
                    <strong><u>HOBBIES &amp; INTERESTS</u></strong>
                  </p>
                  <p className="hobbies">
                    Endeavored Tennis Player, Craft Beer Enthusiast, Dog Owner and Caregiver, Avid Reader of Southern
                    Writing, UNC Basketball Fan, Creative Foods Taster, Devout List Maker
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

      </div>
    </main>
  );
}

export default About;