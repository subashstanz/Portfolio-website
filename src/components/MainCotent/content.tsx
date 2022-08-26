import React, { useCallback } from "react";
import { useLocation } from "react-router";
import Certification from "./section/Certification";
import Education from "./section/Education";
import Experience from "./section/Experience";
import PortFolioIntro from "./section/Intro";
import Projects from "./section/projects";
import Skills from "./section/skills";

type Props = {
  view: null | string;
};

const MainContent = (props: Props) => {
  const { view } = props;
  let location = useLocation();
  console.log("location", location.pathname);
  console.log("test", view);

  const renderMainPage = useCallback(
    (view: string | null) => {
      switch (view) {
        case "/About":
          return <PortFolioIntro />;
        case "/Experience":
          return <Experience />;
        case "/Education":
          return <Education />;
        case "/Projects":
          return <Projects />;
        // case "Skills":
        //   return <Skills />;
        default:
          return (
            <div>
              <PortFolioIntro />
              <Experience />
              <Skills />
              <Education />
              <Projects />
              <Certification />
            </div>
          );
      }
    },
    [location.pathname]
  );
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      {renderMainPage(location.pathname)}
    </main>
  );
};

export default MainContent;
