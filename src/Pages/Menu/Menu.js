import "./Menu.css";
import React from "react";

import { Helmet } from "react-helmet-async";

export default function Menu() {
  return (
    <>
      <Helmet>
        <title>Your Delicious Meal</title>
        <meta name="description" content="This is the main About page for the air bnb clone react site." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <main>
        <div className="about-main-container container">
          <h2>Simply Delicious.</h2>
        </div>
      </main>
    </>
  );
}
