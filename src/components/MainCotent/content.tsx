import React from "react";
import Certification from "./section/Certification";
import Education from "./section/Education";
import Experience from "./section/Experience";
import PortFolioIntro from "./section/Intro";
import Skills from "./section/skills";

type Props = {
  view: null | string;
};

const MainContent = (props: Props) => {
  const { view } = props;
  console.log('test',view)

  const renderMainPage = (view: string | null) => {
    switch (view) {
      case "About":
        return <PortFolioIntro />;
      case "Experience":
        return <Experience />;
      case "Education":
        return <Education />;
      case "Certification":
        return <Certification />;
      case "Skills":
        return <Skills />;
      default:
        return (
          <>
            <PortFolioIntro />
            <Experience />
            <Skills />
            <Education />
            <Certification />
          </>
        );
    }
  };
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      {renderMainPage(view)}
    </main>
  );
};

export default MainContent;
