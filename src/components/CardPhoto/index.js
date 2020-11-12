import React from "react";
import "./style.css";

function CardPhoto(props) {
  return (
    <div className="col mb-4 mt-4">
      <a className="card card-img" href={props.deployURL !== "" ? props.deployURL : props.repoURL} target="_blank" rel="noreferrer">
        <img src={props.img} className="card-img-top" alt={`screenshot of ${props.name} website`} />
        <div className="card-body card-body-img text-center">
          <h5 className="card-title">{props.name}</h5>
        </div>
      </a>
    </div>
  );
}

export default CardPhoto;