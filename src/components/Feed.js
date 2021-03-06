import React from 'react';
import Note from './Note';
import NoteAll from './NoteAll'



const Feed = ({ notes }) => {
    return(
        <div>
 
            {notes.map((note, id) => (
                
                <div key={id}>
                    
                    <Note note={note} />   
                </div>
            ))}
        </div> 
    )  
}

export default Feed;