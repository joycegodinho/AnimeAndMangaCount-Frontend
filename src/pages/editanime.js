import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../components/Button';
import styled from 'styled-components';
import axios from 'axios';
import qs from "qs";

// styled components

const Wrapper = styled.div`
    height: 100%
`;

const Form = styled.form`
    height: 100%
`;

const TextAreaTitle = styled.textarea`
    width: 40%;
    height: 20%;
    margin-bottom: 15px;
`;

const TextAreaNumber = styled.textarea`
    width: 40%;
    height: 20%;
    margin-bottom: 15px;
`;

const TextAreaContent = styled.textarea`
    width: 60%;
    height: 60%;
    margin-bottom: 15px;
`;

// Axios request 

const editAnime = async (id, title, number, content) => {
        
    try {
          
      const {data: editanime} = await axios.put(`http://localhost:1234/anime/edit/${id}`, qs.stringify({title, number, content }), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},
    );          
      
    } catch (error) {
      console.error(error);
      console.log(JSON.stringify(error.response));
      
    }   
};

// Form Component
const Edit  = (props) => {
    
    useEffect(() => {
        document.title = "Edit Anime";
    })

    const [ value, setValue ] = useState([])

    const onChange = event => {
        setValue({...value, [event.target.name]: event.target.value});   
    };

    const EditAnime = async e => {
        const id = await props.match.params.id
        console.log(id)
        e.preventDefault()
        await editAnime(id, value.title, value.number, value.content)  
        props.history.push('/animes')
    }


    return (
        <Wrapper>
            <Form>
                <div>
                    <TextAreaTitle required type="text" id="title" name="title" placeholder="title" value={value.title} onChange={onChange} />
                </div>
                <div>
                    <TextAreaNumber type="text" id="number" name="number" placeholder="number" value={value.number} onChange={onChange} />
                </div>
                <TextAreaContent type="text" id="content" name="content" placeholder="content" value={value.content} onChange={onChange} />
                <Button type="submit" onClick={EditAnime} >
                Add
                </Button>   
            </Form>
        </Wrapper>  
   )
}


export default withRouter(Edit);