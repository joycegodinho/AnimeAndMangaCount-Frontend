import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const deleteManga = async (id) => {
        
    try {
          
      await axios.delete(`http://localhost:1234/mangas/${id}`,
    );          
      
    } catch (error) {
      console.error(error);
      console.log(JSON.stringify(error.response));
      
    }   
};

const Delete = props => {

    const DeleteManga = async e => {
        const id = await props.id
        console.log(id)
        e.preventDefault()
        await deleteManga(id)  
        props.history.push('/')
    }

    return <button onClick={DeleteManga}>Delete Manga</button>
}

export default withRouter(Delete);