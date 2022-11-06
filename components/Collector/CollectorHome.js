import React, { useState, useEffect } from "react";
import Collector from "./Collector";
import axios from "axios";
import  Link from "next/link";
function CollectorHome() {
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
    <div>
      <h3 className="ml-4 font-bold text-2xl">Requests</h3>
      <div className="flex flex-col gap-4 text-white mt-4 items-center">
        {collection?.map((item, index) => (
          <>
          <Link href={`/collector/${item?._id}`}>
            <div>

          <Collector key={index} item={item} />
            </div>
          </Link>
          </>
        ))}
      </div>
    </div>
  );
}

export default CollectorHome;
