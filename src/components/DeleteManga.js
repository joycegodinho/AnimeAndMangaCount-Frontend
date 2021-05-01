import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { BiXCircle } from "react-icons/bi";

import ButtonAsLink from './ButtonAsLink';
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

    return <ButtonAsLink onClick={DeleteManga}><BiXCircle size="1.5em" /></ButtonAsLink>
}

export default withRouter(Delete);