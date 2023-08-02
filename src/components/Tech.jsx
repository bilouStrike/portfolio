import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28 bg-white rounded-[50%] p-4"
          key={technology.name}
        >
          <img src={`${technology.icon}`} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
