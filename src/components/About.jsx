import React, { useRef, useState, useEffect } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import "../constants/Tech.css";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full flex-shrink-0'>
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
        className='bg-tertiary rounded-[20px] py-5 px-6 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center break-words w-full overflow-hidden'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const scrollContainerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [position, setPosition] = useState({
    startX: 0,
    scrollLeft: 0,
  });

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, []);

  const startDragging = (e) => {
    if (!scrollContainerRef.current) return;
    
    setIsMouseDown(true);
    setPosition({
      startX: e.pageX - scrollContainerRef.current.offsetLeft,
      scrollLeft: scrollContainerRef.current.scrollLeft,
    });
  };

  const stopDragging = () => {
    setIsMouseDown(false);
  };

  const moveHandler = (e) => {
    e.preventDefault();
    if (!isMouseDown || !scrollContainerRef.current) return;

    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = x - position.startX;
    scrollContainerRef.current.scrollLeft = position.scrollLeft - walk;
  };

  return (
    <section id="about" className="w-full overflow-hidden scroll-mt-16">
      <motion.div className="container mx-auto px-4 md:px-8">
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>
      
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='container mx-auto mt-4 px-4 md:px-8'
      >
        <p className='text-secondary text-[17px] leading-[30px] max-w-full break-words'>
          I'm a skilled Machine Learning and AI Engineer with a diverse background in Software Engineering.
          I've worked on a wide range of projects, including conversational AI and chatbot development, 
          advanced NLP tasks and Generative AI implementations, computer vision models and applications, 
          as well as custom machine learning and deep learning solutions.
          My expertise in areas like LLMs, Generative AI, and computer vision allows me to create innovative, 
          intelligent systems. Proficient in Python, I also specialize in automation, data scraping, and web automation. 
          I'm passionate about shaping the future of technology through collaborative projects. 
          Let's work together to bring your ambitious AI and ML ideas to life!
        </p>
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 mt-20">
        <div 
          ref={scrollContainerRef}
          className='flex overflow-x-auto scrollbar-container'
          style={{
            userSelect: 'none',
            cursor: isMouseDown ? 'grabbing' : 'grab',
            willChange: 'scroll-position',
            gap: '2.5rem',
            padding: '0 0 20px 0',
          }}
          onMouseDown={startDragging}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onMouseMove={moveHandler}
        >
          <style jsx>{`
            .scrollbar-container {
              -webkit-overflow-scrolling: touch;
            }

            .scrollbar-container::-webkit-scrollbar {
              height: 16px;
              background-color: rgba(255, 255, 255, 0.05);
              border-radius: 8px;
            }

            .scrollbar-container::-webkit-scrollbar-track {
              background-color: rgba(255, 255, 255, 0.05);
              border-radius: 8px;
            }

            .scrollbar-container::-webkit-scrollbar-thumb {
              background-color: #4f46e5;
              border-radius: 8px;
              border: 3px solid rgba(255, 255, 255, 0.05);
              min-width: 50px;
            }

            .scrollbar-container::-webkit-scrollbar-thumb:hover {
              background-color: #6366f1;
            }

            .scrollbar-container::-webkit-scrollbar-thumb:active {
              background-color: #818cf8;
            }

            /* Firefox */
            .scrollbar-container {
              scrollbar-width: auto;
              scrollbar-color: #4f46e5 rgba(255, 255, 255, 0.05);
            }

            /* For better touch support */
            @media (hover: none) {
              .scrollbar-container::-webkit-scrollbar {
                height: 20px;
              }
            }
          `}</style>
          
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;







