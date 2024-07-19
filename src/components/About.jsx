import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

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
    <motion.div>
  
    <h2 className={`${styles.sectionHeadText} ml-40`}>Overview.</h2> {/* Added margin-left */}

    </motion.div>
    <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ml-40'
      >
      I'm a skilled Machine Learning and AI Engineer with a background in Software Engineering. 
      Since 2020, I've worked on diverse projects, including recommendation systems and advanced NLP tasks. 
      My expertise in Generative AI allows me to leverage state-of-the-art algorithms to create innovative solutions. 
      I have experience in mobile app development, Java Servlet and JSP-based projects, location-based games, and blockchain integration. Proficient in Python, 
      I specialize in automation, data scraping, and web automation using Selenium and Beautiful Soup.
      Let's collaborate to shape the future of technology and bring your ideas to life!
      </motion.p>
      <div className='mt-20 flex w-full overflow-x-scroll pb-8 gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    
    </>
  )
}

export default About