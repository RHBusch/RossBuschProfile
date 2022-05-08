
import { HeartIcon } from "@heroicons/react/solid"
import ross from "../Assets/ross.png"
const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hey, I'm Ross!
                        <br className="hidden lg:inline-block" />
                        <br></br>
                        <span> I <HeartIcon className="w-10 inline-block mb-4 animate-pulse fill-red-600 " /> </span> quality code.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm a junior dev looking to support a team of good people
                        building quality systems and services with an eye on social impact.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 ease-in duration-300  rounded text-lg">
                            Let's build together
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 ease-in duration-300 hover:text-white rounded text-lg">
                            Check out my work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded-full"
                        alt="hero"
                        src={ross}
                    />
                </div>
            </div>
        </section>
    )
}
export default About