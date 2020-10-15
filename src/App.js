import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation";
import Header from "./components/header";
import About from "./components/about";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Team from "./components/team";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import JsonData from "./data/staticdata.json";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLeaf,
  faCamera,
  faRocket,
  faBaby,
  faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";

library.add(faLeaf, faCamera, faRocket, faBaby, faQuoteLeft);

function App() {
  const [pageData, setPageData] = useState({});
  useEffect(() => {
    setPageData(JsonData);
  }, []);

  return (
    <div className="App">

      <Navigation />
      <Header />
      <About data={pageData.About} />
      <Services data={pageData.Service} />
      <Portfolio />
      <Team data={pageData.Team} />
      <Testimonials data={pageData.Testimonials} />
      <Contact data={pageData.Contact} />

    </div>
  );
}

export default App;
