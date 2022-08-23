// import Link from "next/link";
import React, { Fragment } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

type Props = {};

const SideBar = (props: Props) => {
  const ICON = ["github", "linkedin", "instagram", "twitter"];

  return (
    <Fragment>
      <div className=" flex items-center justify-center h-full border-t border-gray-100 w-[5rem] bg-slate-100">
        <nav className="flex flex-col items-center justify-end p-2 ">
          <ul className="items-center justify-end h-full mb-4 space-y-6">
            <li className="w-10 h-10">
              {/* <Link href="https://www.linkedin.com/in/subash-s-a6799b165/"> */}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/subash-s-a6799b165/"
              >
                <FaLinkedinIn className="w-5 h-5 m-1 transition duration-300 ease-in-out origin-center transform cursor-pointer text-slate-600 hover:scale-150" />
              </a>
              {/* </Link> */}
            </li>
            <li className="w-10 h-10">
              {/* <Link href="https://github.com/subashstanz?tab=repositories"> */}
              <a
                target="_blank"
                href="https://github.com/subashstanz?tab=repositories"
              >
                <FaGithub className="w-5 h-5 m-1 transition duration-300 ease-in-out origin-center transform cursor-pointer text-slate-600 hover:scale-150" />
              </a>
              {/* </Link> */}
            </li>
            <li className="w-10 h-10">
              {/* <Link href=" https://twitter.com/subashstanz"> */}
              <a target="_blank" href=" https://twitter.com/subashstanz">
                <FaTwitter className="w-5 h-5 m-1 transition duration-300 ease-in-out origin-center transform cursor-pointer text-slate-600 hover:scale-150" />
              </a>
              {/* </Link> */}
            </li>
            <li className="w-10 h-10">
              {/* <Link href=" https://twitter.com/subashstanz"> */}
              <a target="_blank" href=" https://twitter.com/subashstanz">
                <FaInstagram className="w-5 h-5 m-1 transition duration-300 ease-in-out origin-center transform cursor-pointer text-slate-600 hover:scale-150" />
              </a>
              {/* </Link> */}
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default SideBar;
