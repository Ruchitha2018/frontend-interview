import React, { useContext } from "react";
import { AccordionItemContext } from "../context/AccordionItemContext";
import { AccordionContext } from "../context/AccordionContext";

const AccordionHeader = ({ children }) => {

  const { eventKey} = useContext(AccordionItemContext);
  const { activeId, setActiveId, alwaysOpen } = useContext(AccordionContext)

  const handleClick = () => {
    if(alwaysOpen) {
      setActiveId((prev) => {
        console.log(prev);
        return prev.includes(eventKey) ? prev.filter((data) => data !== eventKey) : [...prev, eventKey]
      }
      );
    } else {
      eventKey === activeId ? setActiveId(null) : setActiveId(eventKey)
    }
  }
   return <div className="accordion-header" onClick = {handleClick}>{children}</div>;
};

export default AccordionHeader;
