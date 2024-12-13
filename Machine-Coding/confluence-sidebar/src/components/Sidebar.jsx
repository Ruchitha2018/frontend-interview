import { useState } from "react";
import { FaAngleDown, FaAngleRight, FaCircle } from "react-icons/fa";

const Icon = ({ isOpen, isParentNode, onClick}) => {
  if(isParentNode) {
    return (
      <span>
        { isOpen ? <FaAngleDown /> : <FaAngleRight />}
      </span>
    )
  }
  return (
    <FaCircle style={{height: '6px'}}/>
  )
};

const Folder = ({ folderData }) => {
  const [open, setOpen] = useState(false);
  const isParentNode = Boolean(folderData.children && folderData.children.length);
  return (
    <li>
      <div className="label" onClick={() => setOpen(!open)}>
        <Icon isOpen={open} isParentNode={isParentNode}  />
        {folderData.label}</div>
      {open && folderData.children && <Sidebar sidebarData={folderData.children} />}
    </li>
  );
};

const Sidebar = ({ sidebarData }) => {
  return (
    <ul className="folder">
      {sidebarData.map((data, index) => (
        <Folder folderData={data} key={index} />
      ))}
    </ul>
  );
};

export default Sidebar;
