import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import styled from 'styled-components';


const StyledNote = styled.article`
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 1em;
    padding-right: 1em;
    border-radius: 10px;
    background-color: #FEDEEF;

`;

const MetaInfoTime = styled.div`
    width: 500px;
    height: 50px;  
    
`;

const StyledMark = styled.mark`
    background-color: #FDFF70; 
    border-radius: 0.5em 0.3em;
    
`;

const NoteAll = ({ note }) => {
    return(
    <StyledNote>
        <h3>{note.title}</h3>
        <h4>
            <em>Number </em>
                <StyledMark>
                    {note.number}
                </StyledMark>
        </h4>
        <ReactMarkdown source={note.content} />
    
    </StyledNote>  
    )  
}

export default NoteAll;