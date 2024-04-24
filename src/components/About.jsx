import React from "react";
import { Tilt } from "react-tilt";
import { AnimatePresence, motion } from "framer-motion";

import { styles } from "../styles";
import {services} from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full mx-auto'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full cyan-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-customblue rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        varients={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] 
        max-w-3xl leading-[30px]"
      >
      I'm a skilled Data Scientist with experience using Python, R, SQL. 
      I have extensive knowledge on NLP, NN, and forecast models. I also have experince with 
      C++, C#, frameworks like React, ASP.NET, and Flask. 
      I am a quick learner and often work closely with others to create 
      effective and accurate models for various predictions. I have solved a variety of real-world
      problems and look forward to using my skills and knowledge to solve more problems.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index}
          {...service}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About ,"about");
