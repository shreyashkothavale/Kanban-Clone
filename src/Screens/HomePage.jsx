import React from "react";
import {
  SearchNormal1,
  Calendar2,
  MessageQuestion,
  Notification,
  ArrowDown2,
  HambergerMenu,
} from "iconsax-react";
import Profile from "../assets/profile.png";
import MainPage from "../Components/MainPage";
const HomePage = () => {
  return (
    <div className="md:flex-1 min-h-screen bg-white ">
      <div className="h-[90px] sticky top-0 z-50 bg-white  border-[#DBDBDB] border-b px-10 max-md:px-5 flex justify-between items-center">
        <div className="flex items-center gap-4 w-[420px] max-md:w-[200px] bg-[#F5F5F5] px-4 py-3 text-[#787486] rounded-md">
          <SearchNormal1 className="max-md:w-5" />
          <input
            type="text"
            placeholder="Search for anything..."
            className="outline-none text-xs bg-transparent w-full"
          />
        </div>
        <div className="md:hidden">
          <HambergerMenu />
        </div>
        <div className="hidden md:flex items-center gap-12">
          <div className="flex gap-6 text-[#787486]">
            <span className="cursor-pointer">
              <Calendar2 size={24} />
            </span>
            <span className="cursor-pointer">
              <MessageQuestion size={24} />
            </span>
            <span className="relative cursor-pointer">
              <span className="absolute w-2 h-2 bg-[#D8727D] right-0 rounded-full"></span>
              <Notification size={24} />
            </span>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <h3 className="text-[#0D062D] text-base">Anima Agrawal</h3>
              <p className="text-right text-sm text-[#787486]">U.P, India</p>
            </div>
            <div className="flex items-center gap-5">
              <div className="overflow-hidden w-[45px] h-[45px] rounded-full">
                <img src={Profile} alt="" className="w-[200px]" />
              </div>
              <span>
                <ArrowDown2 color="#292D32" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 max-md:px-5 max-md:pt-10">
        <MainPage />
      </div>
    </div>
  );
};

export default HomePage;
