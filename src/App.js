import "./App.css";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectList/ProjectList";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";

import React, { useState } from "react";

import { I18nPropvider, LOCALES } from "./i18nProvider";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  

  return (
    <I18nPropvider locale={locale}>
      <div>
        <Navbar
          eng={() => setLocale(LOCALES.ENGLISH)}
          dutch={() => setLocale(LOCALES.DUTCH)}
        />
        <Intro />
        <About />
        <ProjectList />
        <Contact />
        {/* npm run deploy */}
      </div>
    </I18nPropvider>
  );
}

export default App;
