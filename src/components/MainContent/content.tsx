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
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <div>
        <section id="About">
          <PortFolioIntro />
        </section>
        <section id="Experience">
          <Experience />
        </section>
        <Skills />
        <section id="Education">
          <Education />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <Certification />
      </div>
    </main>
  );
};

export default MainContent;
