import React, { useState, useEffect } from "react";
import Collector from "./Collector";
import axios from "axios";
import Link from "next/link";
import { collectorSliceActions } from "../../store/collector-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";


function CollectorHome() {
  const dispatch = useDispatch();
  const [collection, setCollection] = useState([]);
  const fetchApi = async () => {
    try {
      const response = await axios.get(
        " https://scrappy-beta.herokuapp.com/items/getitems"
      );
      setCollection(response.data.items);
      console.log(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="bg-slate-100 opacity-80">
      <h3 className="ml-4 font-bold text-3xl mt-8 mb-8 font-poppins">Pending Requests</h3>
      <div className="flex flex-col gap-4 text-white mt-4 items-center">
        {collection
          ?.filter((item) => !item.status)
          .map((item, index) => (
            <>
              <Link href={`/collector/${item?._id}`}>
                <div
                  onClick={() => {
                    dispatch(collectorSliceActions.setCollector(item));
                  }}
                >
                  <Collector key={index} item={item} />
                </div>
              </Link>
            </>
          ))}
      </div>
      <h3 className="ml-4 font-bold text-2xl">Accepted and not resolved</h3>
      <div className="flex flex-col gap-4 text-white mt-4 items-center">
        {collection
          ?.filter((item) => item.status && item.accepted)
          .map((item, index) => (
            <>
              <Link href={`/collector/${item?._id}`}>
                <div
                  onClick={() => {
                    dispatch(collectorSliceActions.setCollector(item));
                  }}
                >
                  <Collector key={index} item={item} />
                </div>
              </Link>
            </>
          ))}
      </div>
      <Navbar/>
    </div>
  );
}

export default CollectorHome;
