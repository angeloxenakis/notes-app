import React from 'react'

const WorkSpace = ({ displayNotes, currentNote, selectNote }) => {
    return(
        <div className="work-space">
          <div className="notes-list">
            {displayNotes.map(note => <div className='notes-list-item' onClick={() => selectNote(note)}>{note.title}</div>)}
          </div>
          <div className="current-note">
            <div className="note-title">
                {currentNote.title}
            </div>
            <div className="note-content">
                {currentNote.content}
            </div>
          </div>
        </div>
    )
}

export default WorkSpace