import { FiChevronRight } from "react-icons/fi";
import { PROJECTS } from "./sectionConstant";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section className="flex items-center justify-center w-full h-full">
      <div className="h-[48.313rem] w-[56.25rem] flex items-start justify-center flex-col space-y-5">
        <div className="mb-2 mb-4 text-base font-normal font-semibold text-dark">
          Projects
        </div>
        <div className="flex flex-col w-full space-y-3">
          <div>
            {PROJECTS.map((item, index) => {
              return (
                <div key={index} className="flex w-full space-y-4">
                  <div className="flex items-center mt-2 mr-3">
                    <FiChevronRight className="w-5 h-5 mt-1 text-dark " />
                  </div>
                  <div className='flex flex-col'>
                  <a target="_blank" href={item.link}>
                    <div className="font-medium leading-7 text-secondary">
                      {item.item}
                    </div>
                    </a>
                    <div className="font-normal leading-7 text-normal">
                      {item.explanation}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div>
        <Lottie
          animationData={certification}
          loop={true}
          autoplay={true}
          style={{ width: 250, height: 250 }}
        />
      </div> */}
    </section>
  );
};

export default Projects;
