import { useState } from "react"
import FileExplorer from "./FileExplorer"


const Folder = ({ data }) => {

    console.log('DATA', data);
    const [toggle, setToggle] = useState(false)
    const [folderData, setFolderData] = useState(data)
    const [value, setValue] = useState('');
    const [showInput, setShowInput] = useState({
        isVisible: false,
        isFolder: false,
    })
    const addField = (field) => {
        //     const newFile = { name: "new-file.txt" }; // Create a new file object
        //     setFolderData((prev) => ({
        //         ...prev,
        //         children: [...prev.children, newFile]
        setShowInput((prev) => (
            {
                isVisible: true,
                isFolder: field === 'folder' ? true : false
            }
        ))
        // }))
    }
    const addFolder = () => {
        const newFolder = { name: "NewFolder", children: [] }; // Create a new file object
        setFolderData((prev) => ({
            ...prev,
            children: [...prev.children, newFolder]
        }))

    }
    const handleChange = (e) => {
      setValue(e.target.value);
    }
    const handleSubmit = () => {
      if(showInput.isFolder) {
        const newFolder = { name: value, children: [] };
        setFolderData((prev) => ({
            ...prev,
            children: [...prev.children, newFolder]
        }))
      }
    }
    return (
        <li>
            {folderData.children ? (<><div onClick={() => setToggle(!toggle)}>
                {folderData.name}
            </div><button onClick={() => addField('folder')}>Add Folder</button> <button onClick={() => addField('file')}>Add File</button></>) : (folderData.name)}
            {showInput.isVisible && <><input type="text" onChange={(e) => handleChange(e)} /> <button onClick={handleSubmit}>Submit</button></>}
            {folderData.children && toggle && <FileExplorer folderData={folderData.children} />}
        </li>
    )
}


export default Folder