import React, { useState } from "react";
import MainContent from "./MainCotent/content";
import TopBarNavigation from "./navigation";
import SideBar from "./sideBar";

type Props = {};

const Portfolio = (props: Props) => {
  const [viewState, setViewState] = useState<null | string>(null);
  console.log("viewStarte", viewState);
  return (
    <div>
      <div className="flex flex-col w-full h-full bg-primary">
        <div className="fixed z-10 w-full">
          <TopBarNavigation viewUpdater={setViewState} />
        </div>
        <div className="flex w-full h-full">
          <div className="fixed h-screen">
            <SideBar />
          </div>
          <div className="w-full h-full bg-primary">
            <MainContent view={viewState} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
