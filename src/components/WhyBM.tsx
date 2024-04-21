import React from "react";

const WhyBM = () => {
  return (
    <div className=" container flex flex-col px-5 items-start sm:items-center justify-center gap-4 py-20 ">
      <div className="space-y-4">
        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">
          Why Choose BoostMedia ?
        </div>
        <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tighter">
          Reasons to Choose Our Platform
        </h2>
        <p className=" text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Our platform offers a comprehensive solution to help your business
          succeed. Here are a few reasons why you should choose us.
        </p>
      </div>
      <ul className="steps steps-vertical text-start sm:steps-horizontal sm:text-center">
        <li className="step step-secondary">We Know Our Stuff</li>
        <li className="step step-secondary ">Local Heroes</li>
        <li className="step step-secondary">All About You</li>
        <li className="step step-secondary">Keep It Simple</li>
        <li className="step step-secondary">Cost-Effective</li>
        <li className="step step-secondary">Always Here for You</li>
      </ul>
      <div className="col-span-3 hidden sm:grid grid-cols-2 gap-4">
        <div className="flex items-start gap-4 max-w-xl">
          <div className="text-gray-500 dark:text-gray-400">
            <ChevronRightIcon className="h-6 w-6" />
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            We're experts at making businesses famous online. We've done it
            before, and we can do it for you too.
          </p>
        </div>
        <div className="flex items-start gap-4 max-w-xl">
          <div className="text-gray-500 dark:text-gray-400">
            <ChevronRightIcon className="h-6 w-6" />
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            We're from Morocco, just like you. We know what people here like and
            how to grab their attention.
          </p>
        </div>
        <div className="flex items-start gap-4 max-w-xl">
          <div className="text-gray-500 dark:text-gray-400">
            <ChevronRightIcon className="h-6 w-6" />
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Your business is unique. We show off what's great about what you do.
          </p>
        </div>
        <div className="flex items-start gap-4 max-w-xl">
          <div className="text-gray-500 dark:text-gray-400">
            <ChevronRightIcon className="h-6 w-6" />
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            We don't complicate things. We make the process easy so you can keep
            focusing on your business.
          </p>
        </div>
        <div className="flex items-start gap-4 max-w-xl">
          <div className="text-gray-500 dark:text-gray-400">
            <ChevronRightIcon className="h-6 w-6" />
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Get the best for less. We offer top-notch service that won’t break
            the bank.
          </p>
        </div>
        <div className="flex items-start gap-4 max-w-xl">
          <div className="text-gray-500 dark:text-gray-400">
            <ChevronRightIcon className="h-6 w-6" />
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Got a question or need a hand? We're just a call or click away,
            anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyBM;

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
