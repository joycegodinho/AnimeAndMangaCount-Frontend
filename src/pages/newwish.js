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
    margin-bottom: 30px;
    margin-top: 50px
`;


const TextAreaContent = styled.textarea`
    width: 60%;
    height: 100px;
    margin-bottom: 30px;
`;

const Status = styled.div`
    margin-bottom: 35px;
`

const Select = styled.select`
    border-radius: 0.3em;
`

// Axios request 

const newWish = async (title, type, content) => {
        
    try {
          
      await axios.post("http://localhost:1234/wish/new", qs.stringify({title, type, content }), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},
    );          
      
    } catch (error) {
      console.error(error);
      console.log(JSON.stringify(error.response));
      
    }   
};

// Form Component
const New  = (props) => {
    
    useEffect(() => {
        document.title = "New Wish";
    })

    const [ value, setValue ] = useState([])

    const onChange = event => {
        setValue({...value, [event.target.name]: event.target.value});   
    };

    const NewWish = async e => {
        e.preventDefault()
        await newWish(value.title, value.type, value.content)  
        props.history.push('/wish')
    }


    return (
        <Wrapper>
            <Form>
                <div>
                    <TextAreaTitle required type="text" id="title" name="title" placeholder="title" value={value.title} onChange={onChange} />
                </div>
                <div>
                    <TextAreaContent type="text" id="content" name="content" placeholder="content" value={value.content} onChange={onChange} />
                </div>
                <Status>
                    <label>Type </label>
                    <Select name="type" value={value.type} placeholder="select" id="type" onChange={onChange}>   
                        <option value="null">None</option>
                        <option value="Manga">Manga</option>
                        <option value="Anime">Anime</option>

                    </Select>
                </Status>
                
                <Button type="submit" onClick={NewWish} >
                Add
                </Button>   
            </Form>
        </Wrapper>  
   )
}


export default withRouter(New);