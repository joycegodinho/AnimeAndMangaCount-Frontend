import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import styled from 'styled-components';


const StyledNote = styled.article`
    max-width: 600px;
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

const MetaInfo = styled.div`
    width: 300px;
    height: 50px;  
    
`;

const MetaInfoNumber = styled.div`
    width: 300px;
    height: 50px;  
    margin-top: 0px; 
    text-align: right; 
    
`;

const StyledMark = styled.mark`
    background-color: #e9a8a1; 
    border-radius: 0.5em 0.3em;
    color: #6b0003;
    
`;

const StyledTitle = styled.h3`
    color: #ca1414;
`
const StyledInfo = styled.em`
    color: #ca1414;
`

const NoteAll = ({ note }) => {
    return(
    <StyledNote>
        <MetaData>
            <MetaInfo>
                <StyledTitle>{note.title}</StyledTitle>            
            </MetaInfo>
            <MetaInfoNumber>
                <h4>
                    <StyledInfo>Number </StyledInfo>
                        <StyledMark>
                            {note.number}
                        </StyledMark>
                </h4>           
            </MetaInfoNumber>
        
        </MetaData>


        <ReactMarkdown source={note.content} />
    
    </StyledNote>  
    )  
}

export default NoteAll;