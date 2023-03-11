import "./About.css";
import React from "react";

import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>The Simple Life About</title>
        <meta name="description" content="This is the main About page for the air bnb clone react site." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <main>
        <div className="about-main-container container">
          <h2>Awesome you have made it to the about page.</h2>
        </div>
      </main>
    </>
  );
}
