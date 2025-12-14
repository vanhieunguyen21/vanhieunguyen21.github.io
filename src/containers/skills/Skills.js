import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        {/* <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade> */}
        {/* <Fade right duration={1000}> */}
          <div className="skills-text-div">
            <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
              {skillsSection.title}{" "}
            </h1>
            <p className={isDark ? "dark-mode subTitle skills-text-subtitle" : "subTitle skills-text-subtitle"}>
              {skillsSection.subTitle}
            </p>
            <div>
              {skillsSection.skills.map((skill, i) => {
                let title = skill.title
                let content = (<p className={isDark ? "dark-mode skills-header" : "skills-header"}><i className={skill.iconClass}></i>  {title}</p>)
                let subtitles = skill.subtitles
                let subtitlesContent = subtitles.map((subtitle, i) => {
                  return (
                  <p key={i} className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                    {"● "}{subtitle}
                  </p>
                  );
                })
                return [content, subtitlesContent]
              })}
            </div>
          </div>
        {/* </Fade> */}
      </div>
    </div>
  );
}
