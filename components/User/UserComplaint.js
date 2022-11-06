import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Balls from "../Balls";
import Navbar from "../Navbar";

function UserComplaint() {
  const router = useRouter();
  const [complaint, setComplaint] = useState({
    title: "",
    photo: "",
    date: new Date().toDateString(),
    location: "",
    status: false,
    accepted: false,
    resolved: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplaint({ ...complaint, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://scrappy-beta.herokuapp.com/complaints",
        complaint
      );
      console.log(response);
      setTimeout(() => {
        alert("complaint raised successfully");
      }, 2000);
      router.push("/userhome");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card1 p-8 h-[50rem] flex-col justify-center items-center ">
        <h3 className="font-poppins font-semibold text-3xl text-gray-900 mb-8">
          Report an issue
        </h3>
        <div className="flex flex-col items-start gap-12 ">
          <div>
            <h3 className="font-poppins font-semibold text-xl text-gray-900">
              Location :
            </h3>
            <input
              type="text"
              name="location"
              value={complaint.location}
              onChange={handleChange}
              id=""
              className="h-12 p-4 rounded-xl mt-2 bg-white opacity-70 text-black font-semibold"
            />
          </div>
          <div>
          <h3 className="font-poppins font-semibold text-xl text-gray-900">
            Upload Photo
          </h3>
          <input
          className="h-12 p-4 rounded-xl mt-2 bg-white opacity-70 text-black font-semibold"
            type="text"
            name="photo"
            value={complaint.photo}
            onChange={handleChange}
            id=""
          />
          </div>
          <div>
          <h3 className="font-poppins font-semibold text-xl text-gray-900">
            Brief Description
          </h3>
          <input
            className="h-32 p-4 rounded-xl mt-2 bg-white opacity-70 text-black font-semibold"
            type="text"
            value={complaint.title}
            onChange={handleChange}
            name="title"
            id=""
          />
          </div>
        </div>
        <div
          className="button-gradient flex justify-center items-center mt-8 text-white font-bold font-poppins  text-xl h-14 rounded-3xl"
          onClick={handleSubmit}
        >
          Submit
        </div>
      </div>
      <Balls w='300' h = '400'/>
      <Navbar/>
    </div>
  );
}

export default UserComplaint;
