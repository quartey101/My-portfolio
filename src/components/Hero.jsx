import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const buttonStyle = {
    border: "2px solid transparent",
    backgroundImage:
      "linear-gradient(-90deg, #804dee 0%, rgba(60, 51, 80, 0) 100%)",
    backgroundOrigin: "border-box",
    backgroundClip: "content-box, border-box",
    padding: "1rem",
    animation: "borderAnimation 3s linear infinite",
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 md:mt-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-[400px] sm:h-[600px]  violet-gradient" />
        </div>
        <div className="ml-3 sm:ml-10 pr-4 sm:pr-20 lg:pr-[200px] mt-5 sm:mt-0">
          <h1 className={`${styles.heroHeadText} text-white md:mt-28 `}>
            Hi, I'm <span className="text-[#915eff]">Benjamin</span>
          </h1>
          <p
            className={
              " font-light lg:text-[25px] sm:text-[22px] xs:text-[18px] text-[16px] lg:leading-[40px] mt-1 sm:mt-5 lg:mt-5 text-gray-100"
            }
          >
            A Software Developer. <br /> A versatile software developer
            specializing in cybersecurity, machine learning, full-stack
            development (frontend and backend), and technical writing.
          </p>
          <a href="#contact">
            <button className="mt-5 sm:mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-purple-600 group-hover:from-green-500 group-hover:to-purple-700 hover:text-white dark:text-white ">
              <span className="relative px-5 py-4 sm:px-8 sm:py-4 transition-all ease-in duration-75 text-white bg-gray-900 rounded-md group-hover:bg-opacity-0 sm:text-lg text-md">
                Get in touch
              </span>
            </button>
          </a>
        </div>
      </div>

      <div className="absolute bottom-32 lg:bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-12 h-12 relative">
            <div className="v-container">
              <div className="v mb-0 text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="sm:w-14 sm:h-14 w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>

              <div
                className="v text-secondary"
                style={{ animationDelay: "0.5s" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="sm:w-14 sm:h-14 w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
