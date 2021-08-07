import React from 'react'

const FolderTabs = ({ userFolders }) => {
    return(
        <div className="folder-tabs">
            <div>All Notes</div>
            {userFolders.map(folder => <div className="folder-tab">{folder.name}</div>)}
        </div>
    )
}

export default FolderTabs