import React, { useState } from "react";
import axios from "axios";
import { userRoleActions } from "../store/userrole-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Balls from "./Balls";
const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const role = useSelector((state) => state.user.userrole);
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const onsubmit = async () => {
    try {
      const res = await axios.post(
        "https://scrappy-beta.herokuapp.com/auth/login",
        data
      );
      dispatch(
        userRoleActions.setUserRole({
          userrole: res?.data?.user?.userrole,
          name: res?.data?.user?.name,
          location: res?.data?.user?.address,
        })
      );
      console.log(res);
      if (role === "user") {
        router.push("/userhome");
      } else if (role === "collector") {
        router.push("/collector");
      } else {
        router.push("/muncipality");
  const router=useRouter()
  const dispatch=useDispatch()
  const role=useSelector(state=>state.user.userrole)
  const [data,setdata]=useState({
    email:"",
    password:""
  })
  const onsubmit=async()=>{
    try{
      if(data.email && data.password){

        const res=await axios.post("https://scrappy-beta.herokuapp.com/auth/login",data)
        dispatch(userRoleActions.setUserRole({
          userrole:res?.data?.user?.userrole,
        name:res?.data?.user?.name,
        location:res?.data?.user?.address,
      }))
      console.log(res)
    }else {
      alert('Every field is required')
    }
      if(role==="user"){
        router.push("/userhome")
      }else if(role==="collector"){
        router.push("/collector")
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex-col flex items-center  gap-8 mt-12">
      <div className="card flex-col justify-center flex items-center h-screen  ">
        <div className=" text-white font-poppins font-semibold text-2xl mt-2 mb-4">
          Login{" "}
        </div>
        <div className="flex-col flex gap-4">
          <input
            type="text "
            placeholder="Email Address"
            className=" text-field  p-4 h-14 w-64 rounded-3xl bg-slate-100"
            onChange={(e) => setdata({ ...data, email: e.target.value })}
          ></input>

          <input
            type="text "
            placeholder="Password"
            className=" text-field  p-4 h-14 w-64 rounded-3xl bg-slate-100"
            onChange={(e) => setdata({ ...data, password: e.target.value })}
          ></input>
        </div>
        <button
          className="button-gradient text-white font-poppins   w-64  font-medium h-14 rounded-3xl mt-8"
          onClick={() => {
            onsubmit();
          }}
        >
          Login
        </button>
      </div>
      <Balls w="300" h = "400" />
    </div>
  );
};

export default Login;
