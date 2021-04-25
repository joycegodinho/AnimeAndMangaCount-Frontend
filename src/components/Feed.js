import React from 'react';
import Note from './Note';



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