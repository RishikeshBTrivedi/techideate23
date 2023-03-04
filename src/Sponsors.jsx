import React from "react";
import Nav from "./Navbar";
import { image1 } from "./Sponsor_images";

function Sponsors() {
  return (
    <div class="container mx-auto">
      <section className="sponsors">
        <div className="text-center text-2xl px-4 py-2">
          <p className="text-white p-10">Sponsors</p>
        </div>
        <div className="container mx-auto flex md:flex-row sm:flex-col flex-wrap text-white w-full sm:justify-center md:justify-between items-center gap-y-10">
          <div className="sm:basis-1 md:basis-1/3 ">
            <img src={image1} alt="" />
          </div>
          <div className=" sm:basis-1 md:basis-1/3">
            <img src={image1} alt="" />
          </div>
          <div className=" sm:basis-1 md:basis-1/3">
            <img src={image1} alt="" />
          </div>
          <div className=" sm:basis-1 md:basis-1/3">
            <img src={image1} alt="" />
          </div>
          <div className=" sm:basis-1 md:basis-1/3">
            <img src={image1} alt="" />
          </div>
          <div className="sm:basis-1 md:basis-1/3">
            <img src={image1} alt="" />
          </div>
          <div className="sm:basis-1 md:basis-1/3">
            <img src={image1} alt="" />
          </div>
          <div className="sm:basis-1 md:basis-1/3">
            <img src={image1} alt="" />
          </div>
          <div className="sm:basis-1 md:basis-1/3">
            <img src={image1} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sponsors;
