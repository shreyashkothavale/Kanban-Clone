import React, { useState } from "react";
import { FolderMinus, Message } from "iconsax-react";

import { Draggable } from "react-beautiful-dnd";
const CardItem = ({ data, id }) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const handleDragUpdate = (update) => {
    const { destination, draggableId } = update;
    if (draggableId === data.id && destination) {
      const { y } = update.draggable.current.getBoundingClientRect();
      const mouseY = destination.y + y;
      const rotationAngle = mouseY > window.innerHeight / 2 ? 180 : 0;
      setRotationAngle(rotationAngle);
    }
  };
  return (
    <Draggable
      index={id}
      draggableId={data.id.toString()}
      onDragUpdate={handleDragUpdate}
    >
      {(provided, snapshot) => {
        return (
          <div
            className={`w-full  h-auto bg-white p-5 mb-5 rounded-2xl flex flex-col gap-7 transform rotate-${rotationAngle} `}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div>
              <div className="flex justify-between items-center ">
                <span
                  className={`text-xs p-2 ${
                    (data.priority === 0 && "bg-[#DFA874] text-[#D58D49]") ||
                    (data.priority === 1 && "bg-[#D8727D] text-[#D8727D]") ||
                    (data.priority === 2 && "bg-[#83C29D] text-[#68B266]")
                  } bg-opacity-[20%] rounded-md font-medium `}
                >
                  {(data.priority === 0 && "Low") ||
                    (data.priority === 1 && "High") ||
                    (data.priority === 2 && "Completed")}
                </span>
                <span className="text-[#0D062D] font-extrabold text-base mb-2">
                  ...
                </span>
              </div>
              <h3 className="text-[#0D062D] text-lg font-semibold">
                {data.title}
              </h3>
              <div className={`${data.images.length > 1 && "flex gap-3"}`}>
                {data.images.map((item) => {
                  return (
                    <div className="overflow-hidden rounded-lg">
                      <img src={item} alt="" />
                    </div>
                  );
                })}
              </div>
              <p className="text-[#787486] text-xs font-normal">{data.desc}</p>
            </div>
            <div className="flex justify-between items-center ">
              <div className="flex -space-x-2">
                {data.profiles.map((profile, i) => (
                  <img
                    className="w-5 h-5 border border-white rounded-full dark:border-gray-800"
                    src={profile}
                    alt=""
                  />
                ))}
              </div>
              <div className="flex items-center gap-[14px]">
                <div className="flex items-center gap-1 ">
                  <Message color="#787486" size={16} />
                  <p className="flex  text-xs text-[#787486]">
                    {data.comments}{" "}
                    <span className="max-md:hidden">comments</span>
                  </p>
                </div>
                <div className="flex items-center gap-1 ">
                  <FolderMinus color="#787486" size={16} />
                  <p className="text-xs text-[#787486] ">
                    {data.files} <span className="max-md:hidden">files</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default CardItem;
