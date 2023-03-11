import "./Home.css";
import React from "react";

import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Air bnb homepage</title>

        <meta name="description" content="This is the main homepage for the air bnb clone react site." />
        <link rel="canonical" href="/" />
      </Helmet>
      <main>
        <div className="home-main-container container">
          <h2>This is the Home page.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos aut numquam saepe alias. Ipsa suscipit nisi
            saepe necessitatibus adipisci. Eaque ipsum animi nihil quas suscipit rem similique assumenda. Officia,
            doloremque.
          </p>
        </div>
      </main>
    </>
  );
}
