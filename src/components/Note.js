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
    background-color: #e9635e; 
    border-radius: 0.5em 0.3em;
    color: #6b0003;
    
`;

const Note = ({ note }) => {
    return(
    <StyledNote>
        <MetaData>

            <MetaInfo>
                <h3>{note.title}</h3>
        
                        <em>Number </em>
                            <StyledMark>
                                {note.number}
                            </StyledMark>
                        
            </MetaInfo>
        
            <MetaInfoTime>
                <em>created at </em> {format(new Date(note.createdAt), 'MM dd yyyy H:mm')} <br /> 
                <em>updated at </em>{format(new Date(note.updatedAt), 'MM dd yyyy H:mm')}
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