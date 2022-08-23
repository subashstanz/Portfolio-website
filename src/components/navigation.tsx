import React, { Dispatch, SetStateAction } from "react";
import Lottie from "lottie-react";
import handwave from "../assets/handwave.json";
import { motion } from "framer-motion";

type Props = {
  viewUpdater: Dispatch<SetStateAction<string | null>>;
};

const NAV_DETAILS = ["About", "Experience", "Education", "Contact"];

const TopBarNavigation = (props: Props) => {
  // const router = useRouter();

  const { viewUpdater } = props;
  return (
    <>
      <nav className="flex items-center justify-between p-4 mx-auto bg-slate-100">
        <div
          className="flex items-center justify-around space-x-4 cursor-pointer"
          onClick={() => viewUpdater(null)}
        >
          <div className="text-sm font-medium text-gray-500">Hello Peeps</div>
          <motion.div
            // initial={{
            //   x: 0,
            // }}
            // animate={{
            //   x: 100,
            // }}
            // transition={{
            //   type: "tween",
            //   ease: "easeInOut",
            //   repeat: Infinity,
            //   repeatType: "reverse",
            //   repeatDelay: 1,
            //   duration: 2,
            // }}
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

        <ul className="flex items-center space-x-2 text-sm font-medium text-gray-500 mr-2">
          {NAV_DETAILS.map((navigation, index) => {
            return (
              <li
                className="hidden cursor-pointer lg:block"
                key={index}
                onClick={() => viewUpdater(navigation)}
              >
                <span className="px-3 py-2 rounded-lg">{navigation}</span>
              </li>
            );
          })}

          {/* <Link href="https://docs.google.com/document/d/15IUe7bBhMwL8UvSEWhUfUYsM2uk_Fx7511dnWWvV9QY/edit?usp=sharing"> */}

          <motion.div
            // initial={{
            //   rotate: 0,
            //   // x: -100
            // }}
            // animate={{
            //   rotate: 180,
            //   // x: 100
            // }}
            // transition={{
            //   type: "tween",
            //   ease: "easeInOut",
            //   repeat: Infinity,
            //   repeatType: "reverse",
            //   repeatDelay: 1,
            //   duration: 2,
            // }}
            // animate={{ rotate: 360, scale: 1 }}
            // transition={{
            //   type: "spring",
            //   stiffness: 260,
            //   damping: 20,
            // }}
            // whileHover={{
            //   type: "spring",
            //   damping: 20,
            // }}

            // whileHover={{ scale: 1.2 }}
            // whileTap={{ scale: 0.9 }}
            // transition={{ type: "spring", stiffness: 200, damping: 1, repeat: Infinity }}

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
            // animate={{ rotate: 360 }}
            //     transition={{ ease: "linear", duration: 2, repeat: Infinity }}
            // transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
