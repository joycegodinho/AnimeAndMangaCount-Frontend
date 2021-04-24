import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
    height: 100%
`;

const Form = styled.form`
    height: 100%
`;

const TextArea = styled.textarea`
    width: 60%;
    height: 60%;
    margin-bottom: 15px;
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



const NoteForm = props => {

    const [value, setValue] = useState([{ title: props.title || '' },{ number: props.number }, { content: props.content }]);
    const onChange = event => {
        
        setValue({...value, [event.target.name]: event.target.value});
        
    };

    return(
        <Wrapper>
            <Form onSubmit={e => {
                e.preventDefault();
                props.action({ variables: {...value}})
            }}>
                <TextAreaTitle required type="text" id="title" name="title" placeholder="title" value={value.title} onChange={onChange} />
                <TextAreaNumber type="text" id="number" name="number" placeholder="number" value={value.number} onChange={onChange} />
                <TextArea type="text" id="content" name="content" placeholder="content" value={value.content} onChange={onChange} />

                <Button type="submit">Save</Button>
            </Form>
        </Wrapper>
    );
};

export default NoteForm;