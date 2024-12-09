import React, { useContext, useState } from "react";
import { AccordionContext } from "../context/AccordionContext";

const Accordion = ({ children, defaultActiveKey, alwaysOpen = false }) => {

  const [activeId, setActiveId] = useState(defaultActiveKey);

  const value = {
    activeId,
    setActiveId,
    alwaysOpen
  }

  return (
    <AccordionContext.Provider value={value}>
        <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  )
};

export default Accordion;
