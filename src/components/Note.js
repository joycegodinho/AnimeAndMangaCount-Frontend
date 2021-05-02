import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiPencil, BiChevronDownSquare } from "react-icons/bi";

import DeleteAnime from './DeleteAnime';
import DeleteManga from './DeleteManga';


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
const MetaInfo = styled.div`

    width: 500px;
    height: 100px;

  
`;

const LinkOptions = styled.div`
    width: 500px;
    height: 100px; 
    text-align: right;  
    margin-top: 15px; 
    
`


const MetaInfoTime = styled.div`
    width: 500px;
    height: 100px;  
    margin-top: 15px;
    text-align: justify-all;  
    
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



const Note = ({ note }) => {
    return(
    <StyledNote>
        <MetaData>

            <MetaInfo>
                <StyledTitle>{note.title}</StyledTitle>
                        <h4>
                            <StyledInfo>Number </StyledInfo>
                                <StyledMark>
                                    {note.number}
                                </StyledMark>
                        </h4>           
            </MetaInfo>
        
            <MetaInfoTime>
                <StyledInfo>created at </StyledInfo> {format(new Date(note.createdAt), 'MM dd yyyy H:mm')} <br /> 
                <StyledInfo>updated at </StyledInfo>{format(new Date(note.updatedAt), 'MM dd yyyy H:mm')}
            </MetaInfoTime> 

            <LinkOptions>
                {document.title == "Animes" ? (
                    <Link to={`anime/edit/${note._id}`}><BiPencil size="1.5em"/><br /></Link> 
                ):(
                    <Link to={`manga/edit/${note._id}`}><BiPencil size="1.5em"/><br /></Link>
                )}
                {document.title == 'Animes' ? (
                    <Link to={`animes/${note._id}`}><BiChevronDownSquare size="1.5em" /> <br /> </Link> 
                    
                ):(
                    <Link to={`mangas/${note._id}`}><BiChevronDownSquare size="1.5em" /><br /></Link>
                )}

                {document.title == "Animes" ? (
                    <DeleteAnime id={note._id} /> 
                ):(
                    <DeleteManga id={note._id} /> 
                )}
            </LinkOptions>
                
            

        </MetaData>

        <ReactMarkdown source={note.content} />
           
    </StyledNote>  
    )  
}

export default Note;