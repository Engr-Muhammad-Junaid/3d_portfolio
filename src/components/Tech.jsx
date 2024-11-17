import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex w-full overflow-x-auto">
      <div className="flex gap-2 px-4 mx-auto">
        {technologies.map((technology) => (
          <div 
            className="w-28 h-28 flex-shrink-0" 
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");