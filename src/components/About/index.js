import React from "react";
import "./style.css";

function About(props) {
  return (
    // <!-- Main About Me Section-->
    <main class="container" id="about-me">
      <div class="row">

        <article title="about me" class="col-lg-12 section-border">

          <div class="page-header">
            <h1>The Nitty Gritty</h1>
          </div>

          <div class="page-header">
            <hr />
          </div>

          <div class="row">
            {/* <!-- Bio and Photo --> */}
            <div class="col-md-6">
              <img class="bio-image" src="../../images/kassi-pic.jpg" alt="Kassi Stumb" />
              <p class="bio-font">
                Hey there! <i class="fa fa-hand-paper-o"></i> My name is Kassi Stumb and I'm a Triangle-based event
                manager with web programming and development skills. I graudated from the heavenly University of North
                Carolina at Chapel Hill with a degree in Math, minor in Statistics and Latin (yup, the nerdiest of
                nerds). I have 10 years management experience and I'm always looking for a new challenge. Currently, I'm
                working toward becoming a Full Stack Developer through the UNC Coding Boot Camp. With a diverse set of
                skills, I'm able to customize beautiful, functional and responsive websites. I like to code things from
                scratch and enjoy seeing ideas brought to life. I look forward to collaborating with you!
              </p>
            </div>


            <div class="col-md-6">
              {/* <!-- Resume Button --> */}
              <div class="row">
                <div class="col-md-12 about-me-border">
                  <button type="button" class="btn btn-lg btn-block" data-toggle="modal" data-target="#exampleModal"
                    id="resume">Resume</button>
                </div>
              </div>

              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <img src="../../images/KStumb_Resume_Web_Online.jpg" width="100%" alt="Resume"></img>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Languages --> */}
              <div class="row">
                <div class="col-md-12 about-me-border">
                  <p class="tech-info mt-2 mb-2">
                    <strong>LANGUAGES I SPEAK</strong>
                  </p>
                </div>
              </div>

              <div class="row" title="about me">
                <div class="col-md-6 about-me-border">
                  <p class="tech-info">
                    <strong><u>FRONT END</u></strong>
                  </p>
                  <p class="tech-info">
                    <i class="fa fa-cog"></i>HTML<br /><i class="fa fa-cog"></i>CSS<br /><i
                      class="fa fa-cog"></i>JavaScript<br /><i class="fa fa-cog"></i>jQuery<br /><i
                      class="fa fa-cog"></i>Bootstrap<br /><i class="fa fa-cog"></i>AJAX<br /><i class="fa fa-cog"></i>React
                  </p>
                </div>
                <div class="col-md-6 about-me-border">
                  <p class="tech-info">
                    <strong><u>BACK END</u></strong>
                  </p>
                  <p class="tech-info">
                    <i class="fa fa-connectdevelop"></i>Node.js<br /><i class="fa fa-connectdevelop"></i>Express<br /><i
                      class="fa fa-connectdevelop"></i>ES6<br /><i class="fa fa-connectdevelop"></i>MySQL<br /><i
                      class="fa fa-connectdevelop"></i>Sequelize<br /><i class="fa fa-connectdevelop"></i>MongoDB<br />
                    <i class="fa fa-connectdevelop"></i>IndexDB<br /><i class="fa fa-connectdevelop"></i>Service Worker<br /><i class="fa fa-connectdevelop"></i>MERN
                  </p>
                </div>
              </div>
              {/* <!-- Hobbies --> */}
              <div class="row" title="about me">
                <div class="col-md-12 about-me-border">
                  <p class="hobbies">
                    <strong><u>HOBBIES &amp; INTERESTS</u></strong>
                  </p>
                  <p class="hobbies">
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