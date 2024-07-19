import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievement } from "../constants";

const AchievementCard = ({ index, title, image }) => (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:min-w-[320px] sm:min-w-[420px] w-full"
    >
      <img src={image} alt={title} className="w-full h-[200px] object-cover rounded-lg" />
      <h2 className="text-white font-black text-[24px] mt-4">{title}</h2>
    </motion.div>
  );

  const AchievementsComponent = () => {
    return (
      <div className='mt-12 bg-black-100 rounded-[20px]'>
        <div className='bg-tertiary rounded-2xl padding min-h-[300px]'>
          <motion.div variants={textVariant()}>

            <h2 className={styles.sectionHeadText}>Achievements</h2>
          </motion.div>
        </div>
        <div className='-mt-20 pb-14 paddingX flex w-full overflow-x-scroll gap-7'>
          {achievement.map((ach, index) => (
            <AchievementCard key={index} index={index} {...ach} />
          ))}
        </div>
      </div>
    );
  };
  
  export default SectionWrapper(AchievementsComponent, "");
  