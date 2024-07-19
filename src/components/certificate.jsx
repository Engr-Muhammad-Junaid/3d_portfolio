import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";  // Import your certificates array from the constants file

const CertificateCard = ({ index, title, link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:min-w-[320px] sm:min-w-[420px] w-full flex flex-col items-center"
  >
    <h2 className="text-white font-black text-[24px] mt-4 text-center">{title}</h2>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 underline mt-4 inline-block"
    >
      View Certificate
    </a>
  </motion.div>
);

const CertificatesComponent = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className='bg-tertiary rounded-2xl padding min-h-[300px]'>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Certificates</h2>
        </motion.div>
      </div>
      <div className='-mt-20 pb-14 paddingX flex w-full overflow-x-scroll gap-7'>
        {certificates.map((cert, index) => (
          <CertificateCard key={index} index={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(CertificatesComponent, "");
