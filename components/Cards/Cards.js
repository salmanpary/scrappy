import React from "react";

const Cards = ({ item, selectedoptions, handleChange }) => {
  return (
    <div className="card2 bg-slate-900 rounded-3xl w-40 h-32 flex-col justify-start p-4">
      <div className="flex justify-between">
        <div className="icon text-black font-poppins font-bold">
          <img src={item.url} alt="" />
        </div>
        <input
          type="checkbox"
          className="h-4 w-4 rounded-full"
          value={item.title}
          checked={selectedoptions?.includes(item.title)}
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
      </div>
      <div className="main-text text-black font-poppins font-medium pb-1 pt-4">
        {item.title}
      </div>
      <div className="sub-text text-gray-400 text-xs font-light font-poppins">
        {item.description}
      </div>
    </div>
  );
};

export default Cards;
