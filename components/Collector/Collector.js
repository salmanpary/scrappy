import Image from "next/image";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

function Collector({ item }) {
  return (
    <div className=" w-[90vw] h-32 card2 p-2 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={item?.photo} width={80} height={100} className="rounded-xl" />
          <div className=" ml-4 flex text-black font-poppins flex-col">
            {" "}
            <h3 className="capitalize font-semibold ">{item?.address}</h3>
            <h3 className="text-sm font-semibold">{item?.date}</h3>
            <h3 className="text-sm">{item?.time}</h3>
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
