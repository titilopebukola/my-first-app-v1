import "./Contact.css";
import React from "react";

import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>We Are at Your Service</title>
        <meta name="description" content="This is the main About page for the air bnb clone react site." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <main>
        <div className="about-main-container container">
          <h2>Kindly leave a message.</h2>
        </div>
      </main>
    </>
  );
}
