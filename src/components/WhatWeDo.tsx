/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3jcJvBGORwM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function WhatWeDo() {
  return (
    <section>
      <div className=" px-4 py-16 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between">
        <div className="flex flex-col items-center ">
          <MegaphoneIcon className="h-10 w-10 mb-4" />
          <h3 className="text-xl font-semibold">Marketing</h3>
          <p className="text-sm xs:text-lg text-center max-w-72">
            We get people talking about your brand. More likes, shares, and
            sales - that's our promise.
          </p>
          <Link className="mt-2 text-orange-100 hover:text-orange-100" href="#">
            Learn more
          </Link>
        </div>
        <div className="flex flex-col items-center ">
          <LaptopIcon className="h-10 w-10 mb-4" />
          <h3 className="text-xl font-semibold">Website Creation</h3>
          <p className="text-sm xs:text-lg text-center max-w-72">
            We build websites that are easy to use and hard to ignore. Your
            business will stand out and draw people in.
          </p>
          <Link className="mt-2 text-orange-100 hover:text-orange-100" href="#">
            See our work
          </Link>
        </div>
        <div className="flex flex-col items-center ">
          <FilmIcon className="h-10 w-10 mb-4" />
          <h3 className="text-xl font-semibold">Video Editing</h3>
          <p className="text-sm xs:text-lg text-center max-w-72">
            Our videos tell your story in a way that everyone will want to watch
            and share.
          </p>
          <Link className="mt-2 text-orange-100 hover:text-orange-100" href="#">
            View examples
          </Link>
        </div>
        <div className="flex flex-col items-center ">
          <PaletteIcon className="h-10 w-10 mb-4" />
          <h3 className="text-xl font-semibold">Design</h3>
          <p className="text-sm xs:text-lg text-center max-w-72">
            We create designs that catch the eye and get people interested in
            what you do.
          </p>
          <Link className="mt-2 text-orange-100 hover:text-orange-100" href="#">
            Explore designs
          </Link>
        </div>
      </div>
    </section>
  );
}

function FilmIcon(props: any) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  );
}

function LaptopIcon(props: any) {
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
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}

function MegaphoneIcon(props: any) {
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
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}

function PaletteIcon(props: any) {
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
      <circle cx="13.5" cy="6.5" r=".5" />
      <circle cx="17.5" cy="10.5" r=".5" />
      <circle cx="8.5" cy="7.5" r=".5" />
      <circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}
