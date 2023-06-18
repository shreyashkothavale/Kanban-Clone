import React from "react";

const List = ({ icon: Icon, title }) => {
  // console.log(icon);
  return (
    <div className="flex justify-center md:justify-start gap-3 items-center cursor-pointer ">
      <Icon color={"#787486"} size={24} />
      <span className="hidden md:block text-[16px] text-[#787486] font-medium">
        {title}
      </span>
    </div>
  );
};

export default List;
