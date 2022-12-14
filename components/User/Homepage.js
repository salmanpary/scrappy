import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Cards from "../Cards/Cards";
import Topbar from "../Topbar";
import { itemActions } from "../../store/item-slice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Balls from "../Balls";

import { useRouter } from "next/router";
const Homepage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cardsdata = [
    {
      url: "/images/paper.png",
      title: "paper",
      description: "Newspapers , Magazines , Books",
    },
    {
      url: "/images/plastic.png",
      title: "plastic",
      description: "plastics like PET,HDPE ,PVC etc",
    },
    {url: "/images/metals.png",
      title: "metal",
      description: "pieces of metal like iron , copper etc",
    },
    {url: "/images/ewaste.png",
      title: "ewaste",
      description: "CPU, Monitor, LED TV, Bulb etc",
    },
    {url: "/images/motor.png",
    title: "Motor",
      description: "motors of fan etc",
    },
    {url: "/images/others.png",
      title: "others",
      description: "Battery, Tyre, Fridge etc",
    },
  ];
  const [selectedoptions, setselectedoptions] = useState([]);
  const handleChange = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setselectedoptions([...selectedoptions, e.target.value]);
    } else {
      setselectedoptions(selectedoptions.filter((id) => id !== e.target.value));
    }
  };
  useEffect(() => {
    dispatch(itemActions.setItems(selectedoptions));
  }, [selectedoptions]);
  console.log(selectedoptions);
  return (
    <div className="flex flex-col justify-center">
      <Topbar />

      <div className="main-page-text flex w-[22rem]  justify-start font-poppins text-xl font-bold m-4  mb-8 bg-white rounded-3xl p-3 px-4">
        Sell Scraps And Earn Cash{" "}
      </div>
     <div className="overflow-y-scroll">
       <div className="card-container">
        <div className="flex flex-wrap justify-center items-center gap-5">
          {cardsdata.map((data, key) => (
            <Cards
              item={data}
              key={key}
              handleChange={handleChange}
              selectedoptions={selectedoptions}
              setselectedoptions={setselectedoptions}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-20">
        <button
          className="bg-slate-900 text-white font-poppins  button-gradient w-52  font-medium h-14 rounded-3xl mt-6 "
          onClick={() => {
            router.push("/userhome2");
          }}
        >
          Next
        </button>
      </div>

     </div>

      <Navbar />
      <Balls w='300' h = '400'/>
    </div>
  );
};

export default Homepage;
