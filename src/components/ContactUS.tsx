import Image from "next/image";
export default function ContactUs() {
  return (
    <div
      className="flex flex-col container mx-auto lg:flex-row min-h-[50vh] items-center justify-center py-20"
      id="contact"
    >
      <div className="flex flex-1 flex-col items-start justify-center gap-6 px-8 py-12 sm:px-12 md:px-16 lg:px-20">
        <a className="flex items-center gap-2" href="#">
          <Image src={"/logo.png"} alt="logo" width={40} height={40} />
          <span className="text-2xl font-bold">boostmedia</span>
        </a>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get in touch .
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Have a question or need help? Fill out the form and we'll get back
            to you as soon as possible.
          </p>
        </div>
      </div>
      <div className="flex flex-1 items-center card w-full shadow-xl bg-base-100 justify-centersm:p-12 md:p-16 lg:p-20">
        <form className="w-full max-w-md space-y-6  card-body">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="space-y-2">
              <label
                className="block text-sm font-medium text-gray-300"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="input input-bordered input-secondary input-sm xs:input-md w-full"
                id="name"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label
                className="block text-sm font-medium  text-gray-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="input input-bordered input-secondary input-sm xs:input-md  w-full "
                id="email"
                placeholder="john@example.com"
                type="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-gray-300"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="input input-bordered input-secondary input-sm xs:input-md  w-full"
              id="subject"
              placeholder="How can we help?"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-gray-300"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="textarea textarea-primary w-full"
              id="message"
              placeholder="Write your message here..."
            />
          </div>
          <button className="btn btn-outline btn-warning w-full" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
