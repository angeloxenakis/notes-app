import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import FolderTabs from './components/FolderTabs';
import WorkSpace from './components/WorkSpace';
import NavBar from './components/NavBar'
import MyInput from './components/MyInput';

function App() {
  const [currentUser, setCurrentUser] = useState()
  const [userFolders, setUserFolders] = useState([])
  const [currentFolder, setCurrentFolder] = useState({name: "All Notes"})
  const [displayNotes, setDisplayNotes] = useState([])
  const [currentNote, setCurrentNote] = useState({title: "", content: ""})

  useEffect(() => {
    fetch("http://localhost:3000/users/3")
    .then(res => res.json())
    .then(user => {
      setCurrentUser(user)
      setUserFolders(user.folders)
      setDisplayNotes(user.notes)
      setCurrentNote(user.notes[0])
    })
  },[])

  const selectTab = (selectedTab) => {
    console.log(selectedTab.name)
    if(selectedTab.id) {
      setCurrentFolder(selectedTab)
      setDisplayNotes(currentUser.notes.filter(note => note.folder_id == selectedTab.id))
      setCurrentNote(displayNotes[0])
    } else {
      setCurrentFolder({name: "All Notes"})
      setDisplayNotes(currentUser.notes)
      setCurrentNote(displayNotes[0])
    }
  }

  const selectNote = (selectedNote) => {
    setCurrentNote(selectedNote)
  }

  return (
    <div className="App">
      <NavBar />
      <div className="main-container">
        <FolderTabs userFolders={userFolders} selectTab={selectTab} currentFolder={currentFolder}/>
        <WorkSpace displayNotes={displayNotes} currentNote={currentNote} selectNote={selectNote}/>
      </div>
      <MyInput />
    </div>
  );
}

export default App;
