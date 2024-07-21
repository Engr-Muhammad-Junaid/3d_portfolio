import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import "../constants/ProjectCard.css";
import otherlink from "../assets/otherlink.png";
import { useState, useRef, useEffect } from 'react';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [cardHeight, setCardHeight] = useState('500px');
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      // Dynamically adjust card height based on content
      const contentHeight = contentRef.current.scrollHeight;
      setCardHeight(isExpanded ? `${contentHeight + 230}px` : '500px');
    }
  }, [isExpanded]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      style={{ height: cardHeight }} // Dynamically set height
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full' // Fixed width
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link ? source_code_link : source_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={source_code_link ? github : otherlink}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div
          className='flex flex-col justify-between overflow-hidden'
          ref={contentRef} // Reference to the content div
        >
          <div className='flex flex-col flex-1'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3> {/* Removed 'truncate' */}
            <p
              className={`mt-2 text-secondary text-[14px] ${isExpanded ? 'line-clamp-none' : 'line-clamp-3'}`}
            >
              {description}
            </p>
            <button
              onClick={handleToggle}
              className='neon-button mt-2'
            >
             <span>{isExpanded ? 'Read less' : 'Read more'}</span>
             </button>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags?.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} ml-5`}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='container mx-auto mt-4 text-secondary text-[17px] leading-[30px] px-[2%]'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className='container mx-auto mt-20 flex w-full overflow-x-scroll pb-8 gap-10 px-[2%]'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
