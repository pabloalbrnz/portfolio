import "./App.css";

// import { Button } from "./components/Button/button";
import { IconButton } from "../components/IconButton/button";
import { Block } from "../components/Block/index";
import { Title } from "../components/Title/index";

import {
  List,
  LinkedinLogo,
  GithubLogo,
  DiscordLogo,
  InstagramLogo,
  Envelope,
  Phone,
} from "@phosphor-icons/react";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="up-containers">
          <div className="up-left-container">
            <Title text="Bringing your toughts to reality" />
            <div className="grid-container">
              <Block name="experience" number="2+" text="Years experience" />
              <Block name="projects" number="3+" text="Projects handled" />
              <Block name="clients" number="1" text="Client" />
            </div>
          </div>
          <div className="up-right-container">
            <div className="page-title">
              <span>pulse Portfolio</span>
              <List weight="bold" />
            </div>
            <div className="me-picture">
              <img src="https://i.imgur.com/La15T2R.png" alt="Pablo Picture" />
            </div>
            <div className="about-name">
              <span className="about-title">Name:</span>
              <span className="about-text">Pablo Albernaz</span>
            </div>
            <div className="about-about">
              <span className="about-title">About:</span>
              <span className="about-text">
                I'm 19 years old, studying UI and Graphic Design. I learn
                Javascript, Typescript, React and NodeJS, learned alone.
                <br />
                <br />I have experience with Photoshop, Illustrator and Coding
                since i'm kid, where i used to learn on internet.
              </span>
            </div>
            <div className="about-social">
              <a href="https://linkedin.com/in/pabloalbrnz" target="_blank">
                <div className="about-icon">
                  <LinkedinLogo weight="fill" />
                </div>
              </a>
              <a href="https://github.com/pabloalbrnz" target="_blank">
                <div className="about-icon">
                  <GithubLogo weight="fill" />
                </div>
              </a>
              <a href="https://instagram.com/pabloalbrnz" target="_blank">
                <div className="about-icon">
                  <InstagramLogo weight="fill" />
                </div>
              </a>
              <a href="mailto:pabloalbernazrincon@gmail.com" target="_blank">
                <div className="about-icon">
                  <Envelope weight="fill" />
                </div>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=55011941940888"
                target="_blank"
              >
                <div className="about-icon">
                  <Phone weight="fill" />
                </div>
              </a>
              <div className="about-icon">
                <DiscordLogo weight="fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
