import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import Header from "../components/header/Header";
import ScrollToTopButton from "../containers/topbutton/Top";
import StyleContext from "../contexts/StyleContext";
import "./ProjectDetails.scss";
import "./Main.scss";
import {Projects} from "../portfolio";

function ProjectDetails () {
  const {isDark} = useContext(StyleContext);
  const {projectId} = useParams();

  const project = Projects.find(item => item.projectId === projectId);

  if (project == null) {
    return "Project not found";
  }

  const textClassName = isDark
    ? "dark-mode project detail-text"
    : "project detail-text";

  const features = project.features?.map((feature, i) => {
    return (
      <ul>
        <li key={i} className={textClassName}>
          {feature}
        </li>
      </ul>
    );
  })

  const details = project.details.map((detail, i) => {
    return (
      <ul>
        <li key={i} className={textClassName}>
          {detail}
        </li>
      </ul>
    );
  });

  const downloadUrl = project.downloadUrl;
  const download =
    downloadUrl == null ? null : (
      <>
        <div
          className={
            isDark ? "dark-mode project column-title" : "project column-title"
          }
        >
          Download Url
        </div>
        <br />
        <a target='_blank' href={project.downloadUrl}>
          {project.downloadText}
        </a>
        <br />
        <br />
        <div className={isDark ? "dark-mode subtitle" : "subtitle"}>
          {project.disclaimer ?? "Disclaimer: Install only on your test device. I'm not responsible for any harm or damage caused to your device after you install downloaded app."}
        </div>
      </>
    );

  const showcases = project.showcases.map((image, i) => {
    return <img src={image} className='project image'></img>;
  });

  return (
    <div className={isDark ? "dark-mode project screen" : "project screen"}>
      <>
        <Header showButtons={false} />
        <br />
        <div className='project main-div'>
          {project.image ? (
            <div className='project-details-image'>
              <img
                src={project.image}
                alt={project.projectName}
                className='card-image'
              ></img>
            </div>
          ) : null}
          <div className={isDark ? "dark-mode project title" : "project title"}>
            {project.projectName}

            {project.platforms?.map((platform, i) => {
              return [" ", <span className='platform-tag'>{platform}</span>];
            })}

          </div>
          <div
            className={
              isDark ? "dark-mode project subtitle" : "project subtitle"
            }
          >
            {project.projectDesc}
          </div>
          <br />

          <div className='project container'>
            <div className='project column column-1'>
              <div
                className={
                  isDark
                    ? "dark-mode project column-title"
                    : "project column-title"
                }
              >
                Features
              </div>

              {features}

              <br />
              <br />

              <div
                className={
                  isDark
                    ? "dark-mode project column-title"
                    : "project column-title"
                }
              >
                Technical Details
              </div>

              {details}

              <br />
              <br />
              <br />

              {download}
            </div>

            <div className='project column column-2'>
              <div
                className={
                  isDark
                    ? "dark-mode project column-title"
                    : "project column-title"
                }
              >
                Showcase
              </div>

              <div className='projects showcase-container'>{showcases}</div>
            </div>
          </div>
        </div>

        <ScrollToTopButton />
      </>
    </div>
  );
}

export default ProjectDetails;
