import { useState } from "react";
import "./App.css";
import AccordionItem from "./components/AccordionItem";
import Accordion from "./components/Accordion";
import AccordionHeader from "./components/AccordionHeader";
import AccordionBody from "./components/AccordionBody";

const accordionData = [
  {
    id: "1",
    title: "Accordion Item #1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
  {
    id: "2",
    title: "Accordion Item #2",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
  {
    id: "3",
    title: "Accordion Item #3",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
  {
    id: "4",
    title: "Accordion Item #4",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
  {
    id: "5",
    title: "Accordion Item #5",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
];

function App() {
  

  return (
    <>
    <h1>Multiple Open Accordion</h1>
      <Accordion defaultActiveKey={["1"]} alwaysOpen>
        {accordionData.map((data, index) => (
          <>
            <AccordionItem eventKey={data.id} key={index}>
              <AccordionHeader>{data.title}</AccordionHeader>
              <AccordionBody>{data.body}</AccordionBody>
            </AccordionItem>
          </>
        ))}
      </Accordion>
    </>
  );
}

export default App;
