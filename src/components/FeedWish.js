import React from 'react';
import NoteWish from './NoteWish'



const Feed = ({ notes }) => {
    return(
        <div>
            {notes.map((note, id) => (        
                <div key={id}>         
                    <NoteWish note={note} />   
                </div>
            ))}
        </div> 
    )  
}

export default Feed;