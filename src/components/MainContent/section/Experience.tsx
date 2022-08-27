import Lottie from "lottie-react";
import { FiChevronRight } from "react-icons/fi";
import experience from "../../../assets/experience.json";
import { EXPERIENCE_FP, EXPERIENCE_GUIDANZ } from "./sectionConstant";

type Props = {};

const Experience = (props: Props) => {
  return (
    <section className="flex items-center justify-end w-full h-full">
      <div className="h-[48.313rem] w-[56.25rem] flex items-start justify-center flex-col">
        <div className="mb-4 text-base font-normal font-semibold text-secondary">
          Experience
        </div>
        <div className="flex flex-col w-full space-y-3">
          <div>
            <div className="flex w-full">
              <div className="font-medium leading-7 text-secondary hover:text-secondary w-[10.7rem]">
                FieldProxy
              </div>
              <div className="flex flex-col space-y-5">
                <div className="flex space-x-2 font-medium leading-7">
                  <span className="text-secondary">
                    Associate Software Developer
                  </span>
                  <span className="cursor-pointer hover:underline hover:underline-offset-4 text-dark">
                    <a href="https://www.fieldproxy.com/">
                      @FieldProxy - YC(W22)
                    </a>
                  </span>
                </div>
                <div className="font-normal leading-4 text-secondary">
                  December 2021 - Present
                </div>
                <ol type="1">
                  {EXPERIENCE_FP.map((item) => {
                    return (
                      <li>
                        <div className="flex w-11/12 my-2 space-x-1">
                          <FiChevronRight className="w-5 h-5 mt-1 text-dark " />
                          <span className="font-normal leading-5 text-normal">
                            {item}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="font-medium leading-7 text-secondary  w-[8.125rem]">
              Guidanz
            </div>
            <div className="flex flex-col space-y-5">
              <div className="flex space-x-2 font-medium leading-7">
                <span className="text-[#42855B]">
                  Software development Engineer Intern
                </span>
                <span className="cursor-pointer hover:underline hover:underline-offset-4 hover:text-[#13361a]">
                  <a href="https://www.guidanz.com/">@Guidanz</a>
                </span>
              </div>
              <div className="font-normal leading-4 text-secondary">
                May 2021 - December 2021
              </div>
              <ol type="1">
                {EXPERIENCE_GUIDANZ.map((item) => {
                  return (
                    <li>
                      <div className="flex w-11/12 my-2 space-x-1">
                        <FiChevronRight className="w-5 h-5 mt-1 text-dark " />
                        <span className="font-normal leading-5 text-normal">
                          {item}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Lottie
        animationData={experience}
        loop={true}
        autoplay={true}
        style={{ width: 250, height: 250 }}
      />
    </section>
  );
};

export default Experience;
