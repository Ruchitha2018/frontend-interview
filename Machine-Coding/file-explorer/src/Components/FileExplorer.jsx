import { useState } from "react"
import Folder from "./Folder"

const FileExplorer = ({ folderData }) => {
    // const [toggle, setToggle] = useState({})

    // const handleToggle = (index) => {
    //     setToggle((prevState) => ({
    //         ...prevState,
    //         [index]: !prevState[index]
    //     }))
    // }
   
    return (
        <ul>
           {folderData.map((data, index) =>  (
             <Folder data={data} key={index} />
           ))}
        </ul>
    )
}


export default FileExplorer;