import React, { useEffect, useState } from "react";
import {
  Add,
  Edit2,
  Link1,
  Filter,
  Calendar1,
  ArrowDown2,
  Profile2User,
  Pause,
  Menu,
} from "iconsax-react";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";
import Tasks from "./Tasks";
import TaskStatus from "../constants/TaskStatus";
import { DragDropContext } from "react-beautiful-dnd";
const MainPage = () => {
  const [tasks, setTasks] = useState(TaskStatus);

  // useEffect(() => {
  //   if (process.browser) {
  //     setReady(true);
  //   }
  // }, []);

  const onDragEnd = (e) => {
    console.log(e);
    if (!e.destination) return;
    let newTaskData = tasks;
    var dragItem =
      newTaskData[parseInt(e.source.droppableId)].cardItem[e.source.index];
    newTaskData[parseInt(e.source.droppableId)].cardItem.splice(
      e.source.index,
      1
    );

    newTaskData[parseInt(e.destination.droppableId)].cardItem.splice(
      e.destination.index,
      0,
      dragItem
    );
    setTasks(newTaskData);
  };
  return (
    <div>
      <div className="flex max-md:flex-col md:justify-between md:items-center max-md:gap-7">
        <div className="flex items-center gap-6">
          <h1 className="text-5xl max-md:text-2xl text-[#0D062D] font-semibold">
            Mobile App
          </h1>
          <div className="cursor-pointer bg-[#5030E5] bg-opacity-[20%] w-[30px] h-[30px] flex justify-center items-center rounded-lg">
            <Edit2 color="#5030E5" size={20} />
          </div>
          <div className="cursor-pointer bg-[#5030E5] bg-opacity-[20%] w-[30px] h-[30px] flex justify-center items-center rounded-lg">
            <Link1 color="#5030E5" size={20} />
          </div>
        </div>
        <div className="w-[270px]  flex justify-between  items-center">
          <button className="flex items-center gap-3 cursor-pointer">
            <div className=" bg-[#5030E5] bg-opacity-[20%] w-[30px] h-[30px] flex justify-center items-center rounded-lg">
              <Add color="#5030E5" size={20} />
            </div>
            <span className="text-base text-[#5030E5] font-medium">Invite</span>
          </button>
          <div className="flex -space-x-2">
            <img
              className="w-10 h-10 border border-white rounded-full dark:border-gray-800"
              src={profile1}
              alt=""
            />
            <img
              className="w-10 h-10 border border-white rounded-full dark:border-gray-800"
              src={profile2}
              alt=""
            />
            <img
              className="w-10 h-10 border border-white rounded-full dark:border-gray-800"
              src={profile3}
              alt=""
            />
            <img
              className="w-10 h-10 border border-white rounded-full dark:border-gray-800"
              src={profile4}
              alt=""
            />
            <span className="w-10 h-10 bg-[#F4D7DA] text-[#D25B68] rounded-full border border-[white] flex justify-center items-center">
              +2
            </span>
          </div>
        </div>
      </div>
      <div className="flex max-md:flex-col max-md:gap-5 mt-[50px] justify-between">
        <div className="flex gap-3">
          <div className="px-4 py-2 flex items-center gap-3 border border-[#787486] rounded-lg cursor-pointer">
            <div className="flex gap-2 items-center text-[#787486]">
              <Filter size={16} />
              <span className="text-base font-medium">Filter</span>
            </div>
            <ArrowDown2 size={16} color="#787486" />
          </div>
          <div className="px-4 py-2 flex items-center gap-3 border border-[#787486] rounded-lg cursor-pointer">
            <div className="flex gap-2 items-center text-[#787486]">
              <Calendar1 size={16} />
              <span className="text-base font-medium">Today</span>
            </div>
            <ArrowDown2 size={16} color="#787486" />
          </div>
        </div>
        <div className="flex items-center  gap-5">
          <button className="px-4 py-2 flex items-center gap-3 border border-[#787486] rounded-lg cursor-pointer">
            <div className="flex gap-2 items-center text-[#787486]">
              <Profile2User size={16} />
              <span className="text-base font-medium">Share</span>
            </div>
          </button>
          <div className="w-[1px] h-7 bg-[#787486]"></div>

          <div className="flex items-center gap-6">
            <button className="px-2 py-2 flex items-center gap-3 bg-[#5030E5]  rounded-lg cursor-pointer">
              <Pause variant="Bold" color="#FFF" className="rotate-90" />
            </button>
            <button>
              <Menu />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[50px] flex md:flex-row flex-col md:justify-between max-md:gap-5 max-md::items-center">
        <DragDropContext onDragEnd={onDragEnd}>
          {tasks.map((item, index) => {
            return <Tasks item={item} index={index} />;
          })}
        </DragDropContext>
      </div>
    </div>
  );
};

export default MainPage;
