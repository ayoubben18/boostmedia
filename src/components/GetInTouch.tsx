export default function GetInTouch() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 container">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-md space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Talk To Us
            </h2>
            <p className=" text-gray-100">
              Find me on social media or send me an email.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <a
              className="group flex flex-col items-center justify-center rounded-lg bg-white p-4 text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950  "
              href="https://www.instagram.com/boostmedia1.ma/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramIcon className="h-8 w-8 mb-2 text-[#E1306C] group-hover:text-[#E1306C]/80 dark:text-[#E1306C] dark:group-hover:text-[#E1306C]/80" />
              <span className="text-sm font-medium">Instagram</span>
            </a>
            <a className="group flex flex-col items-center justify-center rounded-lg bg-white p-4 text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950  ">
              <MailIcon className="h-8 w-8 mb-2 text-[#EA4335] group-hover:text-[#EA4335]/80 dark:text-[#EA4335] dark:group-hover:text-[#EA4335]/80" />
              <span className="text-sm font-medium">Gmail</span>
            </a>
            <a
              className="group flex flex-col items-center justify-center rounded-lg bg-white p-4 text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950  "
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedinIcon className="h-8 w-8 mb-2 text-[#0077B5] group-hover:text-[#0077B5]/80 dark:text-[#0077B5] dark:group-hover:text-[#0077B5]/80" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstagramIcon(props: any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(props: any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
