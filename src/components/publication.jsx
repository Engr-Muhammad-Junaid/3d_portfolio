import React from "react";
import { motion } from "framer-motion";
import "../constants/publish.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { Publications as publicationsData } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const PublicationCard = ({ index, title, description, link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:min-w-[320px] sm:min-w-[420px] w-full w-full flex flex-col items-center" 
  >
    <h2 className="text-white font-black text-[24px]">{title}</h2>
    <p className="text-white tracking-wider text-[18px] whitespace-normal mt-4">{description}</p>
    {link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="neon-button mt-4 inline-block"
      >
        <span>Read More</span>
      </a>
    ) : null}
  </motion.div>
);





const PublicationsComponent = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
    <div
      className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
    >
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Publications </h2>
      </motion.div>
    </div>
    <div className={`-mt-20 pb-14 ${styles.paddingX} flex w-full overflow-x-scroll gap-7`}>
        {publicationsData.map((pub, index) => (
          <PublicationCard key={index} index={index} {...pub} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(PublicationsComponent, "");