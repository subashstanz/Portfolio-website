import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { EDUCATION } from "./sectionConstant";
import education from "../../../assets/education.json";
import Lottie from "lottie-react";

type Props = {};

const Education = (props: Props) => {
  return (
    <section className='flex items-center justify-end w-full h-full'>
      <div className="h-[48.313rem] w-[56.25rem] flex items-start justify-center flex-col space-y-5">
        <div className="mb-2 mb-4 text-base font-normal font-semibold text-slate-500">
          Education
        </div>
        <div className="flex flex-col w-full space-y-3">
          <div className="flex space-x-5">
            <div className="font-medium leading-7 hover:text-gray-600 w-[8.125rem]">
              UnderGraduation
            </div>
            <div className="flex flex-col space-y-5">
              <div className="flex space-x-2 font-medium leading-7">
                <span className="text-slate-600">
                  Anna University, ACT campus, Guindy, Chennai-25
                </span>
              </div>
              <div className="flex space-x-3">
                <div className="font-normal leading-4 text-slate-500">
                  Batch
                </div>
                <div className="font-normal leading-4 text-slate-500">
                  2017 - 2021
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="font-normal leading-4 text-slate-500">
                  Specialization
                </div>
                <div className="font-normal leading-4 text-slate-500">
                  B-Tech Ceramic Technology
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="font-normal leading-4 text-slate-500">CGPA</div>
                <div className="font-normal leading-4 text-slate-500">7.52</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full space-y-3">
          {EDUCATION.map((item, index) => {
            return (
              <div className="mb-2" key={index}>
                <div className="flex space-x-5">
                  <div className="font-medium leading-7 hover:text-gray-600 w-[8.125rem]">
                    {item.type}
                  </div>
                  <div className="flex flex-col space-y-5">
                    <div className="flex space-x-2 font-medium leading-7">
                      <span className="text-slate-600">{item.School}</span>
                    </div>
                    <div className="flex space-x-3">
                      <div className="font-normal leading-4 text-slate-500">
                        Batch
                      </div>
                      <div className="font-normal leading-4 text-slate-500">
                        {item.batch}
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <div className="font-normal leading-4 text-slate-500">
                        Percentage
                      </div>
                      <div className="font-normal leading-4 text-slate-500">
                        {item.percentage}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Lottie
          animationData={education}
          loop={true}
          autoplay={true}
          style={{ width: 250, height: 250 }}
        />
      </div>
    </section>
  );
};

export default Education;
