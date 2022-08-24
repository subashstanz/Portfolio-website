import React, { Fragment } from "react";
import { FiChevronRight } from "react-icons/fi";
import { CERTIFICATION } from "./sectionConstant";
import certification  from "../../../assets/certification.json";
import Lottie from "lottie-react";

type Props = {};

const Certification = (props: Props) => {
  return (
    <section className="flex items-center justify-end w-full h-full">
      <div className="h-[48.313rem] w-[56.25rem] flex items-start justify-center flex-col space-y-5">
        <div className="mb-2 mb-4 text-base font-normal font-semibold text-dark">
          Certification
        </div>
        <div className="flex flex-col w-full space-y-3">
          <div>
            {CERTIFICATION.map((item, index) => {
              return (
                <div key={index} className="flex w-full space-y-4">
                  <div className="flex items-center mt-2 mr-3">
                    <FiChevronRight className="w-5 h-5 mt-1 text-slate-900 " />
                  </div>
                  <div className="font-medium leading-7 text-secondarys">
                    {item}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <Lottie
          animationData={certification}
          loop={true}
          autoplay={true}
          style={{ width: 250, height: 250 }}
        />
      </div>
    </section>
  );
};

export default Certification;
