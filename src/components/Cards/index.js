import React from "react";
import "./style.css";

function Cards(props) {
  return (
    <div>
      <div className="col mb-4 mt-4">
      <div className="card card-description">
        <div className="card-body text-center">
          <p className="card-text">{props.description}</p>
          <p className="tech-info">Technologies Included:<br />
            <i className="fa fa-cog"></i> Sequelize <br /> <i className="fa fa-cog"></i> Express <br /> <i
              className="fa fa-cog"></i> Handlebars <br /> <i className="fa fa-cog"></i> Google Maps API
          </p>
          <a href={`${props.deployURL}`} target="_blank" rel="noreferrer"><button type="button"
            className="btn btn-lg" id="uni-btn">Deployed Project</button></a><a
              href={`${props.repoURL}`} target="_blank" rel="noreferrer"><button type="button"
                className="btn btn-lg" id="uni-btn">GitHub Repo</button></a>
        </div>
      </div>
    </div>
    <div className="col mb-4 mt-4">
      <a className="card card-img" href={`${props.deployURL}`} target="_blank" rel="noreferrer">
        <img src={`${props.img}`} className="card-img-top" alt={`screenshot of ${props.name} website`} />
        <div className="card-body card-body-img text-center">
          <h5 className="card-title">{props.name}</h5>
        </div>
      </a>
    </div>
  </div>
  );
}

export default Cards;