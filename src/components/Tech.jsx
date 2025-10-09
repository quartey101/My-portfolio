import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech, index) => (
        <div className="relative group">
          <p className="absolute z-10 hidden rounded-md hover:flex bg-gray-50 transition duration-200 ease-in text-gray-700 p-1 top-0 right-0 group-hover:flex text-sm shadow-lg">
            {tech.name}
          </p>
          <div
            className="w-28 h-28 cursor-pointer transition hover:scale-95 duration-[400ms] ease-in-out"
            key={tech.name}
          >
            <BallCanvas icon={tech.icon} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
