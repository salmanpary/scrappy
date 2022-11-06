import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";
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
    <div className="ml-6">
      <h1 className="text-xl font-semibold"> ID {details?._id}</h1>
      <div className="mt-6">
        <h3 className="font-semibold">{details?.address}</h3>
        <h3 className="font-semibold">
          {details?.date} {details?.time}
        </h3>
        <img src={details?.photo} width={200} height={100} className="" />
        <div className="">
          <h3 className="font-semibold">Items</h3>
          <ul className="ml-4">
            {details?.items?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div
          className="w-fit bg-gray-500 px-6 py-2 text-white font-bold rounded-lg"
          onClick={() => accepthandler()}
        >
          Accept
        </div>
        <div className="w-fit bg-gray-500 px-6 py-2 text-white font-bold rounded-lg" onClick={()=>{
          rejecthandler()
        }}>
          Decline
        </div>
      </div>
    </div>
  );
}

export default CollectorExpanded;
