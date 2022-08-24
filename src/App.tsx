import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopBarNavigation from "./components/navigation";
import SideBar from "./components/sideBar";
import Portfolio from "./components/portfolio";

function App() {
  return (
    <div>
      <div className="flex flex-col w-full h-full">
        {/* <div className="fixed z-10 w-full">
          <TopBarNavigation />
        </div> */}
        <div className="flex w-full h-full">
          {/* <div className="fixed h-screen">
            <SideBar />
          </div> */}
          <div className="w-full h-full bg-[#FEFFDE]">
            <Portfolio />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
