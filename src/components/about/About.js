import React from "react";

import Developer from "../../img/developer.jpeg";

import "./about.css";

import translate from "../../i18nProvider/translate";

function About() {

  
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card backround"></div>
        <div className="about-card">
          <img src={Developer} className="about-img"></img>
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title"> {translate('title')}</h1>

        <p className="about-sub">
          {" "}
          &nbsp;&nbsp;&nbsp; {translate('about')}
        </p>
        <p className="about-sub">
          &nbsp;&nbsp;&nbsp; {translate('about2')}
        </p>
      </div>
    </div>
  );
}

export default About;
