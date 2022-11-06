import React from "react";
import Navbar from "../Navbar";
import Topbar from "../Topbar";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Balls from "../Balls";
const Userhome2 = () => {
  const items = useSelector((state) => state.items.items);
  const [imageurl, setimageurl] = useState("");
  const [date, setdate] = useState("");
  const [fromtime, setfromtime] = useState("");
  const [totime, settotime] = useState("");
  const [address, setaddress] = useState("");
  const submithandler = async () => {
    const data = {
      items: items,
      photo: imageurl,
      date: date,
      time: `${fromtime}-${totime}`,
      address: address,
    };
    try {
      const res = await axios.post(
        `https://scrappy-beta.herokuapp.com/items/setitems`,
        data
      );
      console.log(res);
      router.push("/userhome");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className=" ">
      <Topbar />

      <div className="main-page-text flex w-44 ml-12 justify-start font-poppins text-m font-bold  bg-white rounded-3xl p-3 px-4">
        Sell Your Scraps{" "}
      </div>

      <div className="card3 mt-4 ml-12 flex flex-col justify-center items-center">
      <div className="flex justify-center">
        
      </div>
      <div className="flex justify-center items-center gap-2 mt-8">
        <span class="label font-poppins font-normal">Image url: </span>

        <input
          type="text"
          className="bg-gray-100 h-12 p-4  rounded-xl"
          onChange={(e) => {
            setimageurl(e.target.value);
          }}
        />
      </div>
      <button className="button-gradient text-white font-poppins font-medium  rounded-3xl mt-4  mb-8 p-4">
          Upload Photo
        </button>
      </div>
      <div className="main-page-text flex w-52 ml-12 justify-start font-poppins text-m font-bold m-4  bg-white rounded-3xl p-3 px-4">
        Scheduled Pickups{" "}
      </div>

      <div className="flex justify-start ml-16">
        <input
          type="date"
          onChange={(e) => {
            setdate(e.target.value.toString());
          }}
        ></input>
      </div>

      <div className="main-page-text flex w-44 ml-12 justify-start font-poppins text-m font-bold  bg-white rounded-3xl p-3 px-4 mt-16">
        Select Time
      </div>

      <div className="flex justify-start ml-16 items-center  ">
        <input
          type="time"
          className="from-date h-16 w-20"
          onChange={(e) => {
            setfromtime(e.target.value);
          }}
        ></input>
        <h4 className="mx-6 font-poppins font-bold">To</h4>
        <input
          type="time"
          className=" to-date h-16 w-20"
          onChange={(e) => {
            settotime(e.target.value);
          }}
        ></input>
      </div>

      {/* <div className="main-page-text flex w-44 ml-12 justify-start font-poppins text-m font-bold  bg-slate-300 rounded-3xl p-3 px-4 ">
        Pickup location
      </div> */}
      <div className="flex justify-center items-center gap-2">
        <label htmlFor="" className="font-poppins font-norma">
          Location:
        </label>

        <input
          type="text"
          className="bg-gray-100  h-12 p-4 rounded-xl"
          onChange={(e) => setaddress(e.target.value)}
        />
      </div>

      <div className="flex justify-center">
        <button
          className="button-gradient text-white font-poppins   w-52  font-medium h-14 rounded-3xl mt-12 "
          onClick={() => {
            submithandler();
          }}
        >
          Submit
        </button>
      </div>

      <Navbar />
      <Balls w='300' h = '400'/>
    </div>
  );
};

export default Userhome2;
