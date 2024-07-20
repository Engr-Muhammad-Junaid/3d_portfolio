import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import "../constants/Tech.css"; 
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
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
      <motion.div className="container mx-auto px-[2%]">
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='container mx-auto mt-4 text-secondary text-[17px] leading-[30px] px-[2%]'
      >
        <p>
          I'm a skilled Machine Learning and AI Engineer with a background in Software Engineering. 
          Since 2020, I've worked on diverse projects, including recommendation systems and advanced NLP tasks. 
          My expertise in Generative AI allows me to leverage state-of-the-art algorithms to create innovative solutions. 
          I have experience in mobile app development, Java Servlet and JSP-based projects, location-based games, and blockchain integration. Proficient in Python, 
          I specialize in automation, data scraping, and web automation using Selenium and Beautiful Soup.
          Let's collaborate to shape the future of technology and bring your ideas to life!
        </p>
      </motion.div>
      <div className='container mx-auto mt-20 flex w-full overflow-x-scroll pb-8 gap-10 px-[2%]'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About

