import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { Link } from "react-router-dom";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="object-contain"
          style={{
            width: `${experience.iconSizePercent || 60}%`,
            height: `${experience.iconSizePercent || 60}%`,
          }}
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h1 className={styles.sectionHeadText}>Work Experience</h1>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
      <motion.div
        variants={(fadeIn, "Up", "spring", 1, 1)}
        className="mt-24 flex justify-center items-center "
      >
        <a
          href="/Benjamin_Quartey_Resume.pdf"
          target="_blank"
          download="Benjamin_Quartey_Resume.pdf"
        >
          <button className="mt-10 sm:mt-20 sm:mb-12 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-purple-600 group-hover:from-green-500 group-hover:to-purple-700 hover:text-white dark:text-white ">
            <span className="relative px-8 py-4 transition-all ease-in duration-75 text-white bg-gray-900 rounded-md group-hover:bg-opacity-0 text-lg">
              View Resume
            </span>
          </button>
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
