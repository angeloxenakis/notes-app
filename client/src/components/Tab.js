import React, { useEffect, useState } from "react"

const Tab = ({ folder, currentFolder, selectTab}) => {
    // const [tabClass, setTabClass] = useState("folder-tab")

    if(folder.name == currentFolder.name) {
        return(
            <div className={"selected-tab"} onClick={() => selectTab(folder)}>{folder.name}</div>
        )
    } else {
        return(
            <div className={"folder-tab"} onClick={() => selectTab(folder)}>{folder.name}</div>
        )
    }
}

export default Tab