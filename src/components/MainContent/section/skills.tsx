import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FiChevronRight } from "react-icons/fi";
import {
  LIBRARIES_1,
  SKILLS,
  TOOLS_1,
  LIBRARIES_2,
  TOOLS_2,
} from "./sectionConstant";
import skills from "../../../assets/skills.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section>
      <div className="h-[25.313rem] w-[56.25rem] flex flex-col items-center space-y-4  ">
        <div className="mb-4 text-base font-normal font-semibold text-slate-500">
          Skills
        </div>
        <div className="w-full h-full">
          <div className="grid w-full grid-cols-3 gap-6 ">
            {SKILLS.map((skill, index) => {
              return (
                <div key={index} className="">
                  <div className="flex flex-col items-center space-y-2">
                    <motion.div
                      initial={{
                        rotate: 0,
                        // x: -100
                      }}
                      animate={{
                        rotate: 180,
                        // x: 100
                      }}
                      transition={{
                        type: "tween",
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 1,
                        duration: 2,
                      }}
                    >
                      <div className="w-20 h-20 ">
                        <CircularProgressbar
                          value={skill.skillPercentage}
                          text={`${skill.skillPercentage}%`}
                          background
                          backgroundPadding={6}
                          styles={buildStyles({
                            backgroundColor: "#42855B",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent",
                          })}
                        />
                      </div>
                    </motion.div>
                    <span className="mb-4 text-base font-normal font-semibold text-slate-900">
                      {skill.skillName}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col w-full h-full space-y-4">
          <div className="flex w-full space-x-8">
            <div className="font-medium leading-7 hover:text-gray-600 w-[10.125rem]">
              Libraries and Frameworks
            </div>
            <div className="flex flex-col space-y-5">
              <div className="flex space-x-8">
                <div>
                  {LIBRARIES_1.map((library, index) => {
                    return (
                      <ol type="1" key={index}>
                        <li>
                          <div className="flex w-11/12 my-2 space-x-1">
                            <FiChevronRight className="w-5 h-5 mt-1 text-dark " />
                            <span className="font-normal leading-5 text-normal">
                              {library}
                            </span>
                          </div>
                        </li>
                      </ol>
                    );
                  })}
                </div>
                <div>
                  {LIBRARIES_2.map((library, index) => {
                    return (
                      <ol type="1" key={index}>
                        <li>
                          <div className="flex w-11/12 my-2 space-x-1">
                            <FiChevronRight className="w-5 h-5 mt-1 text-dark " />
                            <span className="font-normal leading-5 text-normal">
                              {library}
                            </span>
                          </div>
                        </li>
                      </ol>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full h-full space-x-8">
            <div className="font-medium leading-7 hover:text-gray-600 w-[10.125rem]">
              Tools
            </div>
            <div className="flex flex-col space-y-5">
              <div className="flex space-x-8">
                <div>
                  {TOOLS_1.map((library, index) => {
                    return (
                      <ol type="1" key={index}>
                        <li>
                          <div className="flex w-11/12 my-2 space-x-1">
                            <FiChevronRight className="w-5 h-5 mt-1 text-dark" />
                            <span className="font-normal leading-5 text-normal">
                              {library}
                            </span>
                          </div>
                        </li>
                      </ol>
                    );
                  })}
                </div>
                <div>
                  {TOOLS_2.map((library, index) => {
                    return (
                      <ol type="1" key={index}>
                        <li>
                          <div className="flex w-11/12 my-2 space-x-1">
                            <FiChevronRight className="w-5 h-5 mt-1 text-dark " />
                            <span className="font-normal leading-5 text-normal">
                              {library}
                            </span>
                          </div>
                        </li>
                      </ol>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Lottie
          animationData={skills}
          loop={true}
          autoplay={true}
          style={{ width: 250, height: 250 }}
        />
      </div>
    </section>
  );
};

export default Skills;
