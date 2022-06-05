import { ArrowRightIcon } from "@heroicons/react/solid"
import React from "react";

const Navbar = () => {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10" role="navigation">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl hover:text-green-500 ease-in duration-300">
                        Ross Busch
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 hover:text-green-500 ease-in duration-300">
                        My Work
                    </a>
                    <a href="#skills" className="mr-5 hover:text-green-500 ease-in duration-300">
                        Skills
                    </a>
                    <a href="#testimonials" className="mr-5 hover:text-green-500 ease-in duration-300">
                        Testimonials
                    </a>
                    <a href="#contact" className="mr-5 hover:text-green-500 ease-in duration-300">
                        Contact
                    </a>



                </nav>


                <a href="#contact"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 ease-in duration-300 hover:text-white rounded text-base mt-4 md:mt-0">
                    Get in touch!
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    )
}

export default Navbar