import React from "react";
import { Add } from "iconsax-react";

import CardItem from "./CardItem";
import { Droppable } from "react-beautiful-dnd";
const Tasks = ({ item, index }) => {
  return (
    <Droppable droppableId={index.toString()}>
      {(provided, snapshot) => (
        <div
          className={`group cursor-pointer w-[340px] max-md:w-[250px] h-min bg-[#F5F5F5] rounded-2xl p-5`}
          key={index}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div
            className={`flex justify-between items-center border-b-[3px] ${
              (item.status.toLowerCase() === "to do" && "border-[#5030E5]") ||
              (item.status.toLowerCase() === "on progress" &&
                "border-[#FFA500]") ||
              (item.status.toLowerCase() === "done" && "border-[#8BC48A]")
            } pb-5`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 ${
                  (item.status.toLowerCase() === "to do" && "bg-[#5030E5]") ||
                  (item.status.toLowerCase() === "on progress" &&
                    "bg-[#FFA500]") ||
                  (item.status.toLowerCase() === "done" && "bg-[#8BC48A]")
                } rounded-full`}
              ></div>
              <h3 className={`font-medium text-base text-[#0D062D]`}>
                {item.status}
              </h3>
              <span className="w-5 h-5 bg-[#E0E0E0] rounded-full text-xs flex justify-center items-center text-[#625F6D]">
                {item.cardItem.length}
              </span>
            </div>
            <div>
              <div
                className={`hidden group-hover:block w-6 h-6 ${
                  (item.status.toLowerCase() === "to do" && "bg-[#5030E5]") ||
                  (item.status.toLowerCase() === "on progress" &&
                    "bg-[#FFA500]") ||
                  (item.status.toLowerCase() === "done" && "bg-[#8BC48A]")
                } bg-opacity-[20%] rounded-lg`}
              >
                <Add
                  color={`${
                    (item.status.toLowerCase() === "to do" && "#5030E5") ||
                    (item.status.toLowerCase() === "on progress" &&
                      "#FFA500") ||
                    (item.status.toLowerCase() === "done" && "#8BC48A")
                  }`}
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            {item.cardItem.map((cardData, id) => {
              return <CardItem data={cardData} key={cardData.id} id={id} />;
            })}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default Tasks;
