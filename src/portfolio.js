/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import {Projects} from "./projects";

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hieu Nguyen",
  title: "Hello, you! My name is Hieu.",
  subTitle: [
    "I'm a Mobile App Developer with experience in native mobile app development. Throughout my career, I've built many Android applications, most of them with Jetpack Compose." +
      "After that I got into native iOS development using SwiftUI and have developed a few iOS apps since.",
    "Experienced in solving both UI problems and logic problems, I've create a large amount number of custom UI components, designed many databases and used countless tools to achieve desired outcomes.",
    "I strive to develop intuitive, user friendly apps while maintaining simplicity and performance of said apps. At the same time I try to learn new technologies and best practices to enhance the app development."
  ],
  resumeLink: "TODO",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vanhieunguyen21",
  // linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "vanhieunguyen221@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/vanhieunguyen21",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "",
  skills: [
    {
      iconClass: "fa fa-code",
      title: "General",
      subtitles: [
        "Strong understanding about application architecture as well as using appropriate tools to achieve the result.",
        "Skillful in OOP, design patterns, data structure and algorithm."
      ]
    },
    {
      iconClass: "fa fa-mobile",
      title: "Common Mobile Development",
      subtitles: [
        "Build elegant and performance UI using both Jetpack Compose and XML Views (Android) and SwiftUI (iOS).",
        "Creating custom UI components or custom animations to suit the requirements.",
        "Design suitable, clean and scalable app architecture using Model-View-View Model (MVVM).",
        "Applying multi-modules (Android) and multi-packages (iOS) app architecture.",
        "Design and implement databases using Room database (Android) and GRDB.swift (iOS).",
        "Use dependencies injection tools: Hilt, Koin (Android) and Swinject (iOS).",
        "Handle custom graphic components using OpenGL (Android) and Metal (iOS)."
      ]
    },
    {
      iconClass: "fa-brands fa-android",
      title: "Android Specific",
      subtitles: [
        "Integrate C and C++ code into development using Android NDK.",
        "Handle network calls using Retrofit or Ktor.",
        "Create, edit or play media using Android Native Media3 framework.",
        "Handle Google Play Store Console account and policies.",
        "Expert in implementing monetization with ads and in-app purchases.",
        "Develop and publish libraries and SDKs for internal use.",
        "Integrate local Tensorflow Lite AI models into the app.",
        "Optimize app performance with Baseline Profile."
      ]
    },
    {
      iconClass: "fa-brands fa-apple",
      title: "iOS Specific",
      subtitles: [
        "Handle App Store Connect app deployment and policies.",
        "Implement monetization with ads and in-app purchases.",
        "Use SwiftGen tool to generate compile time type safe resources."
      ]
    },
    {
      iconClass: "fa fa-rocket",
      title: "Others",
      subtitles: [
        "Use many tools such as Git, Firebase, Docker, AWS and GCP for development purposes.",
        "Write code in other languages such as Python, Javascript or C++ for other tasks such as mass data manipulation or simple websites.",
        "Take part in monetization analyze sessions to pin-point problems and optimize show rate and eCPM (for Ads) and purchase rate (for IAP)."
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Posts and Telecommunications Institute of Technology",
      logo: require("./assets/images/ptit.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "September 2016 - April 2021",
      desc: "Studied and graduated with Excellent GPA 3.6/4.0.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile Software Developer",
      company: "Apero Technologies Group / Astronex JSC",
      companylogo: require("./assets/images/apero.jpg"),
      date: "June 2023 – October 2025",
      desc:
        "Started as Android Software Developer. " +
        "Later got into developing iOS applications using SwiftUI to expand market reach. " +
        "Ultimately promoted to technical expert title in the company.",
      descBullets: [
        "Implement Android native applications and libraries.",
        "Implement iOS native applications using SwiftUI.",
        "Troubleshoot and optimize Ads and IAP monetization in apps.",
        "Offer both non-technical and technical recommendations and advices throughout apps development flow."
      ]
    },
    {
      role: "Android Software Developer",
      company: "Trek2000 International",
      companylogo: require("./assets/images/trek2000.png"),
      date: "May 2022 – June 2023",
      desc: "Develop Android software products from scratch. Participate in new ideas research as well as improve current products.",
      descBullets: [
        "Developed Android application to unlock encrypted usb device using biometrics and bluetooth low energy (BLE).",
        "Developed Android application to receive, control and livestream from a flashlight with embedded camera."
      ]
    },
    {
      role: "Android Framework Engineer",
      company: "Samsung Vietnam Mobile R&D Center",
      companylogo: require("./assets/images/svmc.png"),
      date: "April 2021 – May 2022",
      desc: "Take part in developing, maintaining and improving company's mobile graphics framework. Look into ways to improve graphics performance in Company's mobile devices.",
      descBullets: [
        "Research new inventions to be applied into the mobile phone.",
        "Achieved Professional title in Algorithm tests."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

const bigProjects = {
  title: "Projects",
  subtitle:
    "Some highlight projects that I have worked with throughout my career",
  projects: Projects,
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "",
  number: "+84 - 336 838 142",
  email_address: "vanhieunguyen221@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

export {Projects};
