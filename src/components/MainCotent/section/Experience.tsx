import Lottie from "lottie-react";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import experience from "../../../assets/experience.json";

type Props = {};

const Experience = (props: Props) => {
  return (
    <section className='flex items-center justify-end w-full h-full'>
      <div className="h-[48.313rem] w-[56.25rem] flex items-start justify-center flex-col">
        <div className="mb-4 text-base font-normal font-semibold text-slate-500">
          Experience
        </div>
        <div className="flex flex-col w-full space-y-3">
          <div className="flex">
            <div className="font-medium leading-7 hover:text-gray-600 w-[8.125rem]">
              Guidanz
            </div>
            <div className="flex flex-col space-y-5">
              <div className="flex space-x-2 font-medium leading-7">
                <span className="text-slate-600">
                  Software development Engineer Intern
                </span>
                <span className="cursor-pointer hover:underline hover:underline-offset-4 text-slate-900">
                  <a href="https://www.guidanz.com/">@Guidanz</a>
                </span>
              </div>
              <div className="font-normal leading-4 text-slate-500">
                May 2021 - December 2021
              </div>
              <ol type="1">
                <li>
                  <div className="flex w-11/12 my-2 space-x-1">
                    <FiChevronRight className="w-5 h-5 mt-1 text-slate-900 " />
                    <span className="font-normal leading-5 text-slate-500">
                      Added various features and important improvements in the
                      product such role based authentication etc .
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex w-11/12 my-2 space-x-1">
                    <FiChevronRight className="w-5 h-5 mt-0.5 text-slate-900 " />
                    <span className="font-normal leading-5 text-slate-500">
                      Created some improvements in UX and feature flexibilty of
                      the products for the customer
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex w-11/12 my-2 space-x-1">
                    <FiChevronRight className="w-5 h-5 mt-0.5 text-slate-900 " />
                    <span className="font-normal leading-5 text-slate-500">
                      Handled Devops (AWS- EC2, S3, Kibana , Grafana) for the
                      product development.
                    </span>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <div className="flex w-full">
              <div className="font-medium leading-7 hover:text-gray-600 w-[10.7rem]">
                FieldProxy
              </div>
              <div className="flex flex-col space-y-5">
                <div className="flex space-x-2 font-medium leading-7">
                  <span className="text-slate-600">
                    Associate Software Developer
                  </span>
                  <span className="cursor-pointer hover:underline hover:underline-offset-4 text-slate-900">
                    <a href="https://www.fieldproxy.com/">
                      @FieldProxy - YC(W22)
                    </a>
                  </span>
                </div>
                <div className="font-normal leading-4 text-slate-500">
                  December 2021 - Present
                </div>
                <ol type="1">
                  <li>
                    <div className="flex w-11/12 my-2 space-x-1">
                      <FiChevronRight className="w-5 h-5 mt-1 text-slate-900 " />
                      <span className="font-normal leading-5 text-slate-500">
                        Developed No code SAAS product from scratch with great
                        efficiency, responsiveness , clean architecture with
                        well maintainable code base
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex w-11/12 my-2 space-x-1">
                      <FiChevronRight className="w-5 h-5 mt-1 text-slate-900 " />
                      <span className="font-normal leading-5 text-slate-500">
                        Developed Task Builder , a task management feature for
                        the customer which is a core feature in no code workflow
                        process builder by several customer
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex w-11/12 my-2 space-x-1">
                      <FiChevronRight className="w-5 h-5 mt-1 text-slate-900 " />
                      <span className="font-normal leading-5 text-slate-500">
                        Developed Input Form , a form management for the
                        response of the customer.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex w-11/12 my-2 space-x-1">
                      <FiChevronRight className="w-5 h-5 mt-1 text-slate-900 " />
                      <span className="font-normal leading-5 text-slate-500">
                        Developed Product catalogue for the response of the
                        Agents and Developed Custom Column , a mathematical
                        formula input for the sheets response
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex w-11/12 my-2 space-x-1">
                      <FiChevronRight className="w-5 h-5 mt-1 text-slate-900 " />
                      <span className="font-normal leading-5 text-slate-500">
                        Developed other basic and core features for the SAAS
                        product .
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex w-11/12 my-2 space-x-1">
                      <FiChevronRight className="w-5 h-5 mt-1 text-slate-900 " />
                      <span className="font-normal leading-5 text-slate-500">
                        Created many reusable components and hooks for the
                        feature development and code maintainability
                      </span>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Lottie animationData={experience} loop={true} autoplay={true} style={{ width: 300, height: 300 }} />
    </section>
  );
};

export default Experience;
