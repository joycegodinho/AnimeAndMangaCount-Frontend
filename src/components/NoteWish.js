import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import DeleteWish from './DeleteWish'


const StyledNote = styled.article`
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 1em;
    padding-right: 1em;
    border-radius: 10px;
    background-color: #e9a8a1;

`;

const MetaData = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    
`;
const MetaInfo = styled.div`

    width: 500px;
    height: 100px;
  
`;

const LinkOptions = styled.div`
    width: 500px;
    height: 50px; 
    text-align: right;   
    
`


const MetaInfoType = styled.div`
    width: 500px;
    height: 50px;  
    
`;

const StyledMark = styled.mark`
    background-color: #e9635e; 
    border-radius: 0.5em 0.3em;
    color: #6b0003;
    
`;

const NoteWish = ({ note }) => {
    return(
    <StyledNote>
        <MetaData>
            <h3>{note.title}</h3>
            <h4>
                <em>Type </em>
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