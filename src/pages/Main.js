import React, {useContext} from "react";
import Header from "../components/header/Header";
import Greeting from "../containers/greeting/Greeting";
import Skills from "../containers/skills/Skills";
import StackProgress from "../containers/skillProgress/skillProgress";
import WorkExperience from "../containers/workExperience/WorkExperience";
import Projects from "../containers/projects/Projects";
import StartupProject from "../containers/StartupProjects/StartupProject";
import Achievement from "../containers/achievement/Achievement";
import Blogs from "../containers/blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "../containers/talks/Talks";
import Podcast from "../containers/podcast/Podcast";
import Education from "../containers/education/Education";
import ScrollToTopButton from "../containers/topbutton/Top";
import Twitter from "../containers/twitter-embed/twitter";
import Profile from "../containers/profile/Profile";
import StyleContext from "../contexts/StyleContext";
import "./Main.scss";

const Main = () => {
  const {isDark} = useContext(StyleContext);

  const homePage = (
    <>
      <Header />
      <Greeting />
      <Skills />
      <StackProgress />
      <Education />
      <WorkExperience />
      <Projects />
      <StartupProject />
      <Achievement />
      <Blogs />
      <Talks />
      <Twitter />
      <Podcast />
      <Profile />
      {/* <Footer /> */}
      <ScrollToTopButton />
    </>
  );

  return (
    <div className={isDark ? "dark-mode" : null}>
        {homePage}
    </div>
  );
};

export default Main;
