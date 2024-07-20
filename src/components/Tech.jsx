import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import '../constants/Tech.css';
const Tech = () => {
  return (
    <div className='flex w-full horver:overflow-x-scroll justify-center gap-8 hide-scrollbar'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");



