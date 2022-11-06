import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";
import Balls from "../Balls";
import Navbar from "../Navbar";

function CollectorExpanded() {
  const router = useRouter();
  const details = useSelector((state) => state.collector.collector);
  console.log(details);
  const accepthandler = async () => {
    try {
   const res=   await axios.post(
        `https://scrappy-beta.herokuapp.com/items/updateitems/${details?._id}`,
        {
          status: true,
          accepted: true,
          resolved: false,
        }
      );
      router.push("/collector")

      console.log(res)
    } catch (e) {
      console.log(e);
    }
  };
  const rejecthandler=async()=>{
    try {
    const res=  await axios.post(
        `https://scrappy-beta.herokuapp.com/items/updateitems/${details._id}`,
        {
          status: true,
          accepted: false,
          resolved: false,
        }
      );
      router.push("/collector")
      console.log(res)
    } catch (e) {
      console.log(e);
    }

  }
  return (
    <div className="flex justify-center items-center h-screen ">
        <div className=" card1 ml-6 p-8">
      <h1 className="text-xl font-bold font-poppins text-gray-800 "> ID : {details?._id}</h1>
      <div className="mt-6">
        <h3 className="font-light font-poppins">{details?.address}</h3>
        <h3 className="font-semibold font-poppins">
          {details?.date} {details?.time}
        </h3>
        <img src={details?.photo} width={200} height={100} className=" rounded-xl mt-6 mb-6" />
        <div className="">
          <h3 className="font-light font-poppins">Items</h3>
          <ul className="ml-4 font-poppins font-semibold m-2 p-2">
            {details?.items?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div
          className="w-fit button-gradient px-6 py-2 text-white font-bold rounded-lg"
          onClick={() => accepthandler()}
        >
          Accept
        </div>
        <div className="w-fit button-gradient2 px-6 py-2 text-white font-bold rounded-lg" onClick={()=>{
          rejecthandler()
        }}>
          Decline
        </div>
      </div>
    </div>
    <Balls w='300' h = '400'/>
    <Navbar/>
    </div>
  );
}

export default CollectorExpanded;
