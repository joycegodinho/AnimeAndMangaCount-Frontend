import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import DeleteWish from './DeleteWish'


const StyledNote = styled.article`
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 2em;
    padding-top: 0.5em;
    padding-bottom: 1em;
    padding-left: 1.5em;
    padding-right: 1.5em;
    border-radius: 10px;
    background-color: #f4d4d3;

`;

const MetaData = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    
`;

const StyledMark = styled.mark`
    background-color: #e9a8a1; 
    border-radius: 0.5em 0.3em;
    color: #6b0003;
    
`;

const StyledTitle = styled.h3`
    color: #ca1414;
`;

const StyledInfo = styled.em`
    color: #ca1414;
`

const NoteWish = ({ note }) => {
    return(
    <StyledNote>
        <MetaData>
            <StyledTitle>{note.title}</StyledTitle>
            <h4>
                <StyledInfo>Type </StyledInfo>
                    <StyledMark>
                        {note.type}
                    </StyledMark>
            </h4>

            <DeleteWish id={note._id} />       
        
        </MetaData>

        <ReactMarkdown source={note.content} />
    </StyledNote>  
    )  
}

export default NoteWish;