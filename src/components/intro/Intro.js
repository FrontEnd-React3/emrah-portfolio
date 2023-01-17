import React from "react";

import "./intro.css";

import MyFoto from "../../img/pp.png";

import translate from "../../i18nProvider/translate";

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-introduction"> {translate('introduction')} </h2>
          <h1 className="i-name"> Emrah Yavuz</h1>
      
          <div className="i-description">
          {translate('description')}
          </div>

          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item"> Java </div>
              <div className="i-title-item"> Spring Boot/JUnit </div>
              <div className="i-title-item"> Hibernate/JPA/JDBC </div>
              <div className="i-title-item"> Intellij/Eclipse/VSC </div>
              <div className="i-title-item"> SQL/MySql</div>
              <div className="i-title-item"> HTML 5/CSS/jQuery</div>
              <div className="i-title-item"> Javascript/React</div>
            </div>
          </div>

         
        </div>
      </div>
      <div className="i-right">
        <div className="i-background"></div>
        <img src={MyFoto} className="i-img"></img>{" "}
      </div>
    </div>
  );
}

export default Intro;
