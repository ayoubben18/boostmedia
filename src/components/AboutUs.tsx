import React from "react";

const AboutUs = () => {
  return (
    <div
      className="container flex flex-col px-8 py-12 min-h-[40vh] gap-2 justify-center items-center text-center text-white"
      id="about"
    >
      <h1 className="text-center text-sm text-slate-200">About Us</h1>
      <h1 className=" text-3xl xs:text-4xl sm:text-5xl font-bold">
        About Our Agency
      </h1>
      <p className=" text-orange-50 text-sm xs:text-lg">
        We're BoostMedia, right here in Morocco. Think of us as your friendly
        neighborhood team that helps your business get noticed online.
        Everyone's online these days, and we make sure they find you. We know
        what makes Morocco special, and we use that to help your brand. We’re
        all about getting your message out there so you can grow. Simple
        websites, cool social media posts, and videos that show off what you do
        - that's what we're good at.
      </p>
    </div>
  );
};

export default AboutUs;
