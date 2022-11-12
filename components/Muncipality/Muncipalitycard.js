import axios from "axios";
import React from "react";
import { useState } from "react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

const Muncipalitycard = ({ item, key, resolve }) => {
  const id = item?._id;
  const [toggle, setToggle] = useState(false);
  const [accdata, setAccdata] = useState({
    status: false,
    accepted: false,
    resolved: false,
  });
  const changeData = async () => {
    try {
      const response = await axios.post(
        `https://scrappy-beta.herokuapp.com/complaints/${id}`,
        accdata
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log(accdata);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${item?.photo})`,
        boxShadow:'inset 0 0 0 100px rgba(0,0,0,.2)'
      }}
      className="h-[30vh] flex flex-col justify-end rounded-3xl"
    >
      {/* <img src={item.photo} alt="" height={100} width={300} style={
        {
          width:'80vw',
          height:'30vw'
        }
      } /> */}

      <div className="p-3 card2 mt-[-2px] z-50 rounded-3xl ">
        <div className="flex justify-between capitalize ">
          <div className="font-poppins font-semibold text-xl">
            {item.location} <br />
            <span className="font-poppins font-normal text-sm ">
              raised on {item.date}
            </span>
          </div>
          {resolve ? (
            <div className="bg-red-400 py-2 px-4">Mark as Resolved</div>
          ) : (
            <div className="flex flex-col gap-3">
              <button
                className="button-gradient rounded-xl p-2 text-sm font-poppins text-white font-semibold"
                onClick={() => {
                  setAccdata({
                    status: true,
                    accepted: true,
                    resolved: false,
                  });
                  changeData();
                }}
              >
                ACCEPT
              </button>
              <button
                className="button-gradient2 rounded-xl p-2 text-sm  text-white font-poppins font-semibold"
                onClick={() => {
                  setAccdata({
                    status: true,
                    accepted: false,
                    resolved: false,
                  });
                  changeData();
                }}
              >
                DECLINE
              </button>
            </div>
          )}
        </div>
        {toggle && <><span className="text-poppins text-sm text-gray-700 font-semibold">{item.title}</span></>}
        <h2 className="text-black flex items-center justify-center text-2xl pt-2 text-center">
          {toggle ? (
            <div onClick={() => setToggle(!toggle)}>
              <BsChevronCompactUp  />
            </div>
          ) : (
            <div onClick={() => setToggle(!toggle)}>
              <BsChevronCompactDown  />
            </div>
          )}
        </h2>
      </div>
    </div>
  );
};

export default Muncipalitycard;
