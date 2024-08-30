import React from "react";

function ContactUs() {
  return (
    <section
      className="bg-blue-50  dark:bg-gray-950 dark:text-white"
      id="contact"
    >
      <div className="mx-auto  py-[15px] px-4 sm:px-8 sm:py-[25px]">
        <div className="mb-1 max-w-3xl text-center sm:text-center md:mx-auto md:mb-8">
          <p className="text-base mt-4 font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
            Contact Us
          </p>
          <h2 className="font-heading text-center mb-[8px] font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
            Get in Touch
          </h2>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid grid-cols-1">
            <p className=" text-sm mb-[15px]  sm:mx-[200px] text-center text-gray-600 dark:text-slate-100">
              Stride confidently with the perfect pair. From urban streets to
              outdoor trails, we’re here to help you find your fit. Drop us a
              message, and let’s take the first step together.
            </p>

            <div>
              <h2 className="mb-4 text-2xl text-center font-bold dark:text-white">
                Ready to Find Your Perfect Match?
              </h2>
              <form
                id="contactForm"
                className=" mx-auto w-[300px] sm:w-[450px] "
              >
                <div className="mb-6">
                  <div className=" mb-1 sm:mb-4">
                    <div className=" mb-1 sm:mb-4">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Your name"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="name"
                      />
                    </div>
                    <div className=" mb-1 sm:mb-4">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Your email address"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className=" mb-1 sm:mb-4">
                    <label
                      htmlFor="textarea"
                      className="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
