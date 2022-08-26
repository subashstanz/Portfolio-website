import React, { Dispatch, SetStateAction } from "react";
import Lottie from "lottie-react";
import handwave from "../assets/handwave.json";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type Props = {
  viewUpdater: Dispatch<SetStateAction<string | null>>;
};

const NAV_DETAILS = ["About", "Experience", "Education",  'Projects'];

const TopBarNavigation = (props: Props) => {
  
  // const router = useRouter();

  const { viewUpdater } = props;
  let navigate = useNavigate();

  return ( 
    <>
      <nav className="flex items-center justify-between p-4 mx-auto bg-primary">
        <div
          className="flex items-center justify-around space-x-4 cursor-pointer"
          onClick={() => navigate(`/`)}
        >
          <div className="text-sm font-medium text-secondary">Hello Peeps</div>
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 30, 0, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <a className="inline-flex items-center justify-center w-10 h-10 rounded-lg">
              👋
              {/* <Lottie animationData={handwave} loop={true} autoplay={true} style={{ width: 500, height: 500 }} /> */}
            </a>
          </motion.div>
        </div>

        <ul className="flex items-center space-x-2 text-sm font-medium text-secondary mr-2">
          {/* {NAV_DETAILS.map((navigation, index) => {
            return (
              <li
                className="hidden cursor-pointer lg:block"
                key={index}
                onClick={() => navigate(`${navigation}`)}
              >
                <span className="px-3 py-2 rounded-lg">{navigation}</span>
              </li>
            );
          })} */}

          {/* <Link href="https://docs.google.com/document/d/15IUe7bBhMwL8UvSEWhUfUYsM2uk_Fx7511dnWWvV9QY/edit?usp=sharing"> */}

          <motion.div
            animate={{
              scale: [1, 1.2, 1.2, 1.2, 1],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <a
              className="relative inline-block group focus:outline-none focus:ring"
              target="_blank"
              href="https://docs.google.com/document/d/15IUe7bBhMwL8UvSEWhUfUYsM2uk_Fx7511dnWWvV9QY/edit?usp=sharing"
            >
              <span className="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-yellow-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>

              <span className="relative inline-block px-5 py-2 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75">
                Resume
              </span>
            </a>
          </motion.div>

          {/* </Link> */}
        </ul>
      </nav>
    </>
  );
};

export default TopBarNavigation;
