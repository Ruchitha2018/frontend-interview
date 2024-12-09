import React, { useContext, useEffect, useState } from "react";
import { AccordionItemContext } from "../context/AccordionItemContext";

const AccordionItem = ({ children, eventKey }) => {
   
  const value = {eventKey}
  
  return (
    <AccordionItemContext.Provider value={value}>
      <div className="accordion-item">{children}</div>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
