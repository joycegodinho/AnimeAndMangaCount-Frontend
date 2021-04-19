import React from 'react';
import Note from './Note';



const Feed = ({ notes }) => {
    return(
        <div>
            {notes.map((note, i) => (
                <div key={i}>
                    <Note note={note} />
                    
                </div>
            ))}
        </div> 
    )  
}

export default Feed;