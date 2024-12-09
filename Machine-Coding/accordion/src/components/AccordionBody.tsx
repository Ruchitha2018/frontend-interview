import React, { useContext, useEffect, useState } from "react";
import { AccordionItemContext } from "../context/AccordionItemContext";
import { AccordionContext } from "../context/AccordionContext";

const AccordionBody = ({ children }) => {

  const { eventKey } = useContext(AccordionItemContext);
  const { activeId, alwaysOpen } = useContext(AccordionContext);

  const Design = () => {
    return (
      <div className={`accordion-body`}>
        {children}
        <div className="accordion-body--icon">
          <span>&#9650;</span>
        </div>
      </div>
    )
  }
  const OpenMultiple = () => {
    return alwaysOpen && activeId.map((data) => data === eventKey && (
       <Design />
    ))
  }
  return (
    <>
    { alwaysOpen ? <OpenMultiple /> : activeId === eventKey ? <Design /> : null}
    </>
  )
};

export default AccordionBody;
