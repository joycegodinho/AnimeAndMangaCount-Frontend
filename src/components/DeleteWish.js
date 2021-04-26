import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const deleteWish = async (id) => {
        
    try {
          
      await axios.delete(`http://localhost:1234/wish/${id}`,
    );          
      
    } catch (error) {
      console.error(error);
      console.log(JSON.stringify(error.response));
      
    }   
};

const Delete = props => {

    const DeleteWish = async e => {
        const id = await props.id
        console.log(id)
        e.preventDefault()
        await deleteWish(id)  
        props.history.push('/')
    }

    return <button onClick={DeleteWish}>Delete Wish</button>
}

export default withRouter(Delete);