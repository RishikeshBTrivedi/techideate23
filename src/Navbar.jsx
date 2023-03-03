import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { motion } from "framer-motion"
import tech from "./images/techidiate_logo.png"
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <nav style={{backgroundColor:"rgb(10,8,150,0.3)"}} className="fixed top-0 flex sm:px-4 min-w-full text-white z-1 justify-around items-center h-14 z-50 pt-4 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              <motion.button
                whileHover={{
                  scale: 1.05,
                 
                }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  className="h-1/2 w-1/4 p-5"
                  src = {tech}//add the techidiate logo
                  alt="tech-logo"
                  onClick={() => {
                    window.location.href=  "/"
                  }}
                />
              </motion.button>
                
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/events"
                    className=" hover:bg-gray-700 text-white font-sans px-3 py-2 rounded-md font-medium text-xl"
                  >
                    Events
                  </a>

                  <a
                    href="/sponsors"
                    className="text-gray-300 hover:bg-gray-700 font-sans hover:text-white px-3 py-2 rounded-md font-medium text-xl"
                  >
                    Sponsors
                  </a>

                  <a
                    href="/speakers"
                    className="text-gray-300 hover:bg-gray-700 font-sans hover:text-white px-3 py-2 rounded-md font-medium text-xl"
                  >
                    Speakers
                  </a>

                  <a
                    href="/faqs"
                    className="text-gray-300 hover:bg-gray-700 font-sans hover:text-white px-3 py-2 rounded-md font-medium text-xl"
                  >
                    FAQs
                  </a>

                  <a
                    href="/team"
                    className="text-gray-300 hover:bg-gray-700 font-sans hover:text-white px-3 py-2 rounded-md font-medium text-xl"
                  >
                    Team
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="/events"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Events
                </a>

                <a
                  href="/faqs"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Faqs
                </a>

                <a
                  href="/sponsors"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Sponsors
                </a>

                <a
                  href="/team"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>
                <a
                  href="/speakers"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Speakers
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      
    </div>
  );
}

export default Nav;
