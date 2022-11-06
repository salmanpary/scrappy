import Image from "next/image";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

function Collector({ item }) {
  return (
    <div className=" w-[90vw] bg-gray-500 p-2 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={item?.photo} width={80} height={100} className="" />
          <div className=" ml-4 flex flex-col">
            {" "}
            <h3>{item?.address}</h3>
            <h3>{item?.date}</h3>
            <h3>{item?.time}</h3>
          </div>
        </div>
        <h3>
          <AiOutlineRight className="text-3xl font-thin" />
        </h3>
      </div>
    </div>
  );
}

export default Collector;
