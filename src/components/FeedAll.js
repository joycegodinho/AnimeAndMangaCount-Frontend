import React from 'react';
import NoteAll from './NoteAll'



const Feed = ({ notes }) => {
    return(
        <div>
            {notes.map((note, id) => (        
                <div key={id}>         
                    <NoteAll note={note} />   
                </div>
            ))}
        </div> 
    )  
}

export default Feed;