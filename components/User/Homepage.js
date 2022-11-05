import React from "react";
import Navbar from "../Navbar";
import Cards from "../Cards/Cards";
import Topbar from "../Topbar";

const Homepage = () => {
  return (
    <div>
      <Topbar />

      <div className="main-page-text flex w-52 ml-12 justify-start font-poppins text-xl font-bold m-4  mb-8 bg-slate-300 rounded-3xl p-3 px-4">
        Sell Your Scraps{" "}
      </div>
      <div className="card-container">
        <div className="card-container-row1 flex  justify-center m-4">
          <Cards main="PAPER" sub="Carton box , magazines etc. " icon="Icon" />
          <Cards main="PAPER" sub="Carton box , magazines etc. " icon="Icon" />
        </div>

        <div className="card-container-row2 flex  justify-center m-4">
          <Cards main="PAPER" sub="Carton box , magazines etc. " icon="Icon" />
          <Cards main="PAPER" sub="Carton box , magazines etc. " icon="Icon" />
        </div>

        <div className="card-container-row3 flex  justify-center m-4">
          <Cards main="PAPER" sub="Carton box , magazines etc. " icon="Icon" />
          <Cards main="PAPER" sub="Carton box , magazines etc. " icon="Icon" />
        </div>
        <div className="card-container-row3 flex  justify-center m-4">
          <Cards main="PAPER" sub="Carton box , magazines etc. " icon="Icon" />
          <Cards main="PAPER" sub="Carton box , magazines etc. " icon="Icon" />
        </div>

        <div className="card-container-row3 flex  justify-center m-4">
          <Cards main="PAPER" sub="Carton box , magazines etc. " icon="Icon" />
          <Cards main="PAPER" sub="Carton box , magazines etc. " icon="Icon" />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-slate-900 text-white font-poppins   w-52  font-medium h-14 rounded-3xl mt-4 ">
          Next
        </button>
      </div>

      <Navbar />
    </div>
  );
};

export default Homepage;
