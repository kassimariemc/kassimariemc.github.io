import React, { Component } from "react";
import './style.css';
import Cards from "../Cards";
import Projects from "../../projects.json";

class Portfolio extends Component  {
  state = {
    Projects
  }

  render() {
    return (
      // <!-- Portfolio Section-->
      <div className="container" id="portfolio">
        <div className="row">
  
          <div className="col-lg-12 section-border">
  
            <div className="page-header">
              <h1>Check Out My Work</h1>
            </div>
  
            <div className="page-header">
              <hr />
            </div>
  
            {/* <!-- Begin Image Links --> */}
            <div className="row row-cols-1 row-cols-md-2">
              {this.state.Projects.map(project => (
                <Cards
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  deployURL={project.deployURL}
                  repoURL={project.repoURL}
                  img={project.img}
                  tech={project.tech}
                />
              ))}
            </div>
          </div>
  
        </div>
  
      </div>
    );
  }
}

export default Portfolio;