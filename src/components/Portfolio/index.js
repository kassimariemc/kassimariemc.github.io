import React, { Component } from "react";
import './style.css';
import CardDescription from "../CardDescription";
import CardPhoto from "../CardPhoto";
import Projects from "../../projects";

class Portfolio extends Component {
  state = {
    Projects
  }

  render() {
    return (
      // <!-- Portfolio Section-->
      <main className="container" id="portfolio">
        <div className="row">
          <section className="col-lg-12 section-border">

            <div className="page-header">
              <h1>Check Out My Work</h1>
            </div>

            <div className="page-header">
              <hr />
            </div>

            {/* <!-- Begin Image Links --> */}
            {this.state.Projects.map(project => {
              return project.id % 2 === 0 ? 
              <div className="row row-cols-1 row-cols-md-2" key={project.id}>
                <CardDescription
                  name={project.name}
                  description={project.description}
                  deployURL={project.deployURL}
                  repoURL={project.repoURL}
                  tech={project.tech}
                />
                <CardPhoto
                  name={project.name}
                  deployURL={project.deployURL}
                  repoURL={project.repoURL}
                  img={project.img}
                />
              </div> : 
              <div className="row row-cols-1 row-cols-md-2" key={project.id}>
                <CardPhoto
                  name={project.name}
                  deployURL={project.deployURL}
                  repoURL={project.repoURL}
                  img={project.img}
                />
                <CardDescription
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  deployURL={project.deployURL}
                  repoURL={project.repoURL}
                  tech={project.tech}
                />
              </div>
            })}

          </section>
        </div>
      </main >
    );
  }
}

export default Portfolio;