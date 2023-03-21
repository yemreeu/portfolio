import React from "react";
import Profile from "../../components/Profile/Profile";
import Download from "../../components/downloadButton/Download";
import Social from "../../components/SocialMedia/Social";

import "./home.scss";

function Home() {
  return (
    <div className="homePage">
      <div >
        <h1>Hello there!</h1>
        <h4>I am Yunus Emre Uyanık</h4>
        <br />
        <p>
          This is my official portfolio website to shows all the information
          about me
        </p>
        <br />
        <br />
        <Download />
        <Social />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
}

export default Home;
