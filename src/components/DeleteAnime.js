import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { BiXCircle } from "react-icons/bi";

import ButtonAsLink from './ButtonAsLink';

const deleteAnime = async (id) => {
        
    try {
          
      await axios.delete(`http://localhost:1234/animes/${id}`,
    );          
      
    } catch (error) {
      console.error(error);
      console.log(JSON.stringify(error.response));
      
    }   
};

const Delete = props => {

    const DeleteAnime = async e => {
        const id = await props.id
        console.log(id)
        e.preventDefault()
        await deleteAnime(id)  
        props.history.push('/')
    }

    return <ButtonAsLink onClick={DeleteAnime}><BiXCircle size="1.5em" /></ButtonAsLink>
}

export default withRouter(Delete);