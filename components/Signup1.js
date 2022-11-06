import React, { useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userRoleActions } from "../store/userrole-slice";
import Balls from "./Balls";
import Navbar from "../Navbar";

const Signup1 = () => {
  const dispatch = useDispatch();
  return (
    <div bac className="flex-col justify-center flex items-center h-screen gap-32  ">
      <div className="font-logo text-white text-7xl">Scrappy.</div>
      <div className=" card  flex flex-col justify-center items-start ">
        
        <div className=" font-poppins text-lg font-semibold text-white mb-8 ml-8 ">
          SignUp As
        </div>
        <div className="flex-col flex ">
          <Link href="/signup">
            <button
              className=" text-white  button-gradient font-poppins   w-64 mb-4 font-medium h-14 rounded-2xl ml-8 "
              onClick={() => {
                dispatch(
                  userRoleActions.setUserRole({
                    userrole: "user",
                    location: "",
                    name: "",
                  })
                );
              }}
            >
              User
            </button>
          </Link>
          <div className="font-poppins flex justify-center items-center font-bold text-white ml-8 text-xl ">OR</div>
          <Link href="/signup">
            <button
              className="button-gradient text-white font-poppins   w-64  font-medium mt-4 h-14 rounded-2xl ml-8 "
              onClick={() =>
                dispatch(
                  userRoleActions.setUserRole({
                    userrole: "collector",
                    location: "",
                    name: "",
                  })
                )
              }
            >
              Collector
            </button>
          </Link>
        </div>
      </div>
      <Balls w='400' h = '500'/>
      <Navbar/>
    </div>
  );
};

export default Signup1;
