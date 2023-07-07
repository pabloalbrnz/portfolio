import "./App.css";

// import { Button } from "./components/Button/button";
// import { IconButton } from "../components/IconButton/button";
import { Block } from "./components/Block/index";
import { Title } from "./components/Title/index";
import { ProjectThumb } from "./components/ProjectThumb/index";

import { US, BR } from "country-flag-icons/react/3x2";

import { useState } from "react";

import {
  Moon,
  Sun,
  LinkedinLogo,
  GithubLogo,
  InstagramLogo,
  DiscordLogo,
  BehanceLogo,
  Envelope,
  PenNib,
  Phone,
  ClockCountdown,
} from "@phosphor-icons/react";

import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [isDark, setIsDark] = useState(true);
  const [isEnglish, setIsEnglish] = useState(true);

  function theme() {
    if (isDark == true) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  }

  function language() {
    if (isEnglish == true) {
      setIsEnglish(false);
    } else {
      setIsEnglish(true);
    }
  }

  return (
    <>
      <div className="app-container">
        <div className="up-containers">
          <div className="up-left-container">
            <Title
              text={
                isEnglish ? "UI and Graphic Designer" : "Designer Gráfico e UI"
              }
              btnText={isEnglish ? "Hire me" : "Contrate-me"}
            />
            <div className="grid-container">
              <Block
                name="experience"
                number="2+"
                text={isEnglish ? "Years experience" : "Anos de experiência"}
              />
              <Block
                name="projects"
                number="3+"
                text={isEnglish ? "Projects handled" : "Projetos concluídos"}
              />
              <Block
                name="clients"
                number="1"
                text={isEnglish ? "Client" : "Cliente"}
              />
            </div>
          </div>
          <div className="up-right-container">
            <div className="page-title">
              <span>pulse's Portfolio</span>
              <div className="page-title-icons">
                <div className="language" onClick={language}>
                  {isEnglish ? (
                    <US className="language-flag" />
                  ) : (
                    <BR className="language-flag" />
                  )}
                </div>
                <div className="theme" onClick={theme}>
                  {isDark ? <Sun weight="fill" /> : <Moon weight="fill" />}
                </div>
              </div>
            </div>
            <a
              href="https://instagram.com/pabloalbrnz"
              target="_blank"
              className="me-picture"
            >
              <img src="https://i.imgur.com/La15T2R.png" alt="Pablo Picture" />
            </a>
            <div className="about-name">
              <span className="about-title">
                {isEnglish ? "Name:" : "Nome:"}
              </span>
              <span className="about-text">Pablo Albernaz</span>
            </div>
            <div className="about-about">
              <span className="about-title">
                {isEnglish ? "About:" : "Sobre:"}
              </span>
              {isEnglish ? (
                <span className="about-text">
                  I'm 19 years old, studying UI and Graphic Design. I learn
                  Javascript, Typescript, React and NodeJS, learned alone.
                  <br />
                  <br />I have experience with Photoshop, Illustrator and Coding
                  since i'm kid, where i used to learn on internet.
                </span>
              ) : (
                <span className="about-text">
                  Tenho 19 anos de idade, estud Design Gráfico e UI. Aprendi
                  React e Javascript, sozinho pela internet.
                  <br />
                  <br />
                  Tenho experiência com o pacote Adobe e programação desde
                  criança, onde busquei aprender por cursos e youtube.
                </span>
              )}
            </div>
            <div className="about-social">
              <a href="https://linkedin.com/in/pabloalbrnz" target="_blank">
                <div className="about-icon" icon-tooltip="LinkedIn">
                  <LinkedinLogo weight="fill" />
                </div>
              </a>
              <a href="https://github.com/pabloalbrnz" target="_blank">
                <div className="about-icon" icon-tooltip="GitHub">
                  <GithubLogo weight="fill" />
                </div>
              </a>
              <a href="https://behance.com/pulseim" target="_blank">
                <div className="about-icon" icon-tooltip="Behance">
                  <BehanceLogo weight="fill" />
                </div>
              </a>
              <a href="mailto:pabloalbernazrincon@gmail.com" target="_blank">
                <div className="about-icon" icon-tooltip="Email">
                  <Envelope weight="fill" />
                </div>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=55011941940888"
                target="_blank"
              >
                <div className="about-icon" icon-tooltip="WhatsApp">
                  <Phone weight="fill" />
                </div>
              </a>
              <a href="https://discord.com/invite/ErJHvmG99p" target="_blank">
                <div className="about-icon" icon-tooltip="Discord">
                  <DiscordLogo weight="fill" />
                </div>
              </a>
              <a href="https://instagram.com/pabloalbrnz" target="_blank">
                <div className="about-icon" icon-tooltip="Instagram">
                  <InstagramLogo weight="fill" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="down-containers">
          <div className="down-left-container">
            <div className="projects-header">
              <div className="projects-title">
                <PenNib weight="fill" />
                <span>{isEnglish ? "My Projects" : "Meus projetos"}</span>
              </div>
              <button
                onClick={() => navigate("/portfolio/projects")}
                className="projects-more"
              >
                {isEnglish ? "See more" : "Mais"}
              </button>
            </div>
            <div className="projects-grid">
              <ProjectThumb
                imageURL="https://cdn.discordapp.com/attachments/834602259425525820/1123815082430824468/Default_Red.png"
                alt="Magix Thumb"
                linkURL="/portfolio/projects#magix"
              />
              <ProjectThumb
                imageURL="https://i.imgur.com/BRfB9Yl.png"
                alt="Aurora-v2"
                linkURL="https://pabloalbrnz.github.io/Aurora-v2"
              />
              <ProjectThumb
                imageURL="https://downloadr2.apkmirror.com/wp-content/uploads/2023/05/19/64744328198be.png"
                alt="MyAnimeList"
                linkURL="https://github.com/Paulo-Augusto12/anime-project"
              />
              <ProjectThumb
                imageURL="https://i.imgur.com/4qy9ota.png"
                alt="Rocketship Logo"
                linkURL="portfolio/projects#rocketshipLogo"
              />
              <ProjectThumb />
            </div>
          </div>
          <div className="down-right-container">
            <div className="comming-soon">
              <ClockCountdown weight="fill" />
              <span>{isEnglish ? "Comming soon!" : "Em breve!"}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
