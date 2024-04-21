import React from "react";
import WhatWeDo from "./WhatWeDo";

const Services = () => {
  return (
    <div
      className=" text-center pt-20 flex flex-col container mx-auto"
      id="services"
    >
      <h1 className=" text-3xl xs:text-4xl sm:text-5xl font-bold">Services</h1>
      <p className=" text-sm xs:text-lg text-slate-700 mt-5">
        We get people talking about your brand. More likes, shares, and sales -
        that's our promise.
      </p>
      <WhatWeDo />
    </div>
  );
};

export default Services;
