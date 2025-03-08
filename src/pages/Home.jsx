import React from "react";
import panda from "../assets/panda.png";
function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-white text-3xl m-5">
     <p className="my-5">WELCOM TO HOME PAGE</p>
     <img src={panda} alt="home image" className="w-[800px] m-3 p-2"></img>
    </div>
  );
}

export default Home;
