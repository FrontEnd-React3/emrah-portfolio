import React from "react";

import "./project.css";

const project = ({ name, img, link }) => {
  return (
    <div className="project">
      <h3 className="project-name">{name}</h3>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} className="project-img"></img>
      </a>
    </div>
  );
};

export default project;
