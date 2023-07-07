import { useNavigate } from "react-router-dom";

import { IconButton } from "../../components/IconButton/button";

import "./style.css";

import { CaretLeft, Sun } from "@phosphor-icons/react";

import { US } from "country-flag-icons/react/3x2";

import projectsData from "./projects.json";

interface Project {
  id: string;
  name: string;
  images: string[];
  category: string[];
  tools?: string[];
}

interface Projects {
  projects: Project[];
}

export function Projects() {
  const navigate = useNavigate();

  const projects: Projects = projectsData;

  return (
    <div className="projects-wrapper">
      <div className="projects-container">
        <div className="projects-container-title">
          <IconButton
            icon={<CaretLeft weight="bold" />}
            text="Back"
            side={false}
            size="sm"
            variant="secondary"
            onClick={() => navigate("/portfolio")}
          />
          <h2>{"My Projects"}</h2>
          <div className="projects-title-icons">
            <div className="projects-language">
              <US className="language-flag" />
            </div>
            <div className="projects-theme">
              <Sun weight="fill" />
            </div>
          </div>
        </div>
        <div className="projects-container-grid">
          <div className="projects-wrapper-grid">
            {projects.projects.map((project) => (
              <div
                className="project-wrapper"
                id={project.id}
                key={project.name}
              >
                <span className="project-name">{project.name}</span>
                <div className="project-images">
                  {project.images.map((image) => (
                    <div className="project-img">
                      <img src={`./${project.id}/${image}`} />
                    </div>
                  ))}
                </div>
                <div className="project-tags">
                  <div className="project-categories">
                    <p>Categories:</p>
                    {project.category.map((category) => (
                      <span key={category}>{category}</span>
                    ))}
                  </div>
                  <div className="project-tools">
                    {project.tools && project.tools.length > 0 ? (
                      <>
                        <p>Tools:</p>
                        {project.tools.map((tool) => (
                          <span key={tool}>{tool}</span>
                        ))}
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="project-divider"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
