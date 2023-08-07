import React from "react";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { contact } from "../constants";

const Contact = () => {
 
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex justify-center  gap-5 w-full bg-black-100 p-8 rounded-2xl"
      >
        {contact.map((item) => 
          <a href={item.link}><img src={`${item.icon}`} className="w-[45px]" /></a> 
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
