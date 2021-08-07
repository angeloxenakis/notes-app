import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import FolderTabs from './components/FolderTabs';

function App() {
  const [currentUser, setCurrentUser] = useState()
  const [userFolders, setUserFolders] = useState([])
  const [displayNotes, setDisplayNotes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/users/3")
    .then(res => res.json())
    .then(user => {
      setCurrentUser(user)
      setUserFolders(user.folders)
      console.log(user)
      
    })
  },[])

  return (
    <div className="App">
      <FolderTabs userFolders={userFolders}/>

    </div>
  );
}

export default App;
