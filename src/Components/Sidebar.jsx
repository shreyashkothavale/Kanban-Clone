import React, { useState } from "react";
import logo from "../assets/logo.svg";
import leftArrow from "../assets/LeftArrow.svg";
import List from "./list";
import MenuList from "../constants/MenuList";
import { AddSquare, LampOn } from "iconsax-react";

const Sidebar = () => {
  const [active, setActive] = useState(0);
  const MyProjects = [
    { id: 0, color: "7AC555", projectTitle: "Mobile App" },
    { id: 1, color: "FFA500", projectTitle: "Website Redesign" },
    { id: 2, color: "E4CCFD", projectTitle: "Design System" },
    { id: 3, color: "76A5EA", projectTitle: "Wireframes" },
  ];

  return (
    <div className="md:w-[250px] w-[100px] min-h-screen bg-white border-r border-[#DBDBDB]">
      <div className="h-[90px] sticky top-0 z-50 bg-white border-[#DBDBDB] border-b flex justify-center items-center">
        <div className="flex px-5 w-full justify-between item-center">
          <div className="flex md:flex-row flex-col text-center  items-center gap-2">
            <img src={logo} alt="" className="w-7 " />
            <span className="font-semibold text-2xl max-md:text-xs text-[#0D062D]">
              Project M.
            </span>
          </div>
          <button className="hidden md:block">
            <img src={leftArrow} alt="" className="w-7" />
          </button>
        </div>
      </div>
      <div className="w-full px-5 py-3 ">
        {MenuList.map((item) => {
          return (
            <div className="py-5">
              <List icon={item.icon} title={item.title} />
            </div>
          );
        })}
      </div>
      <div className="px-3">
        <div className="border-b mt-2 border-[#DBDBDB]"></div>
      </div>
      <div className="hidden md:block w-full px-5 py-8">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-bold text-[#787486]">MY PROJECTS</h3>
          <span className="cursor-pointer">
            <AddSquare color="#787486" size={20} />
          </span>
        </div>
        <div className="mt-[30px]">
          {MyProjects.map((item, id) => {
            return (
              <div className="group" key={id}>
                <div
                  className={`flex items-center  justify-between cursor-pointer ${
                    active == item.id
                      ? `bg-[#5030E5] bg-opacity-[8%]`
                      : "bg-none"
                  } group-hover:bg-[#5030E5] group-hover:bg-opacity-[8%] my-2 py-3 px-3 rounded-md`}
                  onClick={() => {
                    setActive(item.id);
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-2 h-2 ${
                        (item.id === 0 && "bg-[#7AC555]") ||
                        (item.id === 1 && "bg-[#FFA500]") ||
                        (item.id === 2 && "bg-[#E4CCFD]") ||
                        (item.id === 3 && "bg-[#76A5EA]")
                      } rounded-full`}
                    ></div>
                    <h3
                      className={`font-semibold ${
                        active === item.id ? "text-[#0D062D]" : "text-[#787486]"
                      }  group-hover:text-[#0D062D] `}
                    >
                      {item.projectTitle}
                    </h3>
                  </div>
                  <span className="invisible group-hover:visible font-extrabold text-base mb-2">
                    ...
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="py-6 mt-14">
          <div className="relative w-full h-[203px] bg-[#F5F5F5] rounded-xl flex  items-center">
            <div className="absolute w-[70px] h-[70px] bg-[#F5F5F5]  -top-[40px] left-0 right-0 m-auto rounded-full  flex justify-center ">
              <div className="absolute top-5">
                <LampOn variant="Bold" color="#FBCB18" size={24} />
              </div>
              <div className="absolute w-10 h-10 bg-[#FBCB18] bg-opacity-[70%] rounded-full top-3 blur-lg"></div>
            </div>
            <div className="relative flex flex-col gap-3  px-5 z-20 text-center">
              <h2 className="text-base font-medium text-[#000000] mt-5">
                Thoughts Time
              </h2>
              <p className="font-normal text-xs text-[#787486]">
                We don’t have any notice for you, till then you can share your
                thoughts with your peers.
              </p>
              <button className="bg-white text-sm font-medium p-3 rounded-md text-[#000000]">
                Write a message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
