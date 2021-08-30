import React from 'react'
import Tab from "./Tab"

const FolderTabs = ({ userFolders, selectTab, currentFolder }) => {
    return(
        <div className="folder-tabs">
            {currentFolder.name == "All Notes" ? 
            <div className="selected-tab" onClick={() => selectTab({name: "All Notes"})}>All Notes</div> 
            : 
            <div className="folder-tab" onClick={() => selectTab({name: "All Notes"})}>All Notes</div>}
            {userFolders.map(folder => <Tab folder={folder} currentFolder={currentFolder} selectTab={selectTab}/>)}
        </div>
    )
}

export default FolderTabs