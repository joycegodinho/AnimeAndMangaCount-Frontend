import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

const Note = ({ note }) => {
    return(
    <StyledNote>
        <h3>{note.title}</h3>
        <h4>
            <em>Number </em>
                <StyledMark>
                    {note.number}
                </StyledMark>
        </h4>
        <MetaInfoTime>
            <em>created at </em> {format(new Date(note.createdAt), 'MM dd yyyy H:mm')} <br /> 
            <em>updated at </em>{format(new Date(note.updatedAt), 'MM dd yyyy H:mm')}
        </MetaInfoTime> 
            
        <ReactMarkdown source={note.content} />
        {document.title == 'Animes' ? (
            <Link to={`animes/${note._id}`}>anime <br /> </Link> 
            
        ):(
            <Link to={`mangas/${note._id}`}>manga <br /></Link>
        )}
        {document.title == "Animes" ? (
            <Link to={`anime/edit/${note._id}`}>edit anime </Link>
        ):(
            <Link to={`manga/edit/${note._id}`}>edit manga </Link>
        )}
        {document.title == "Animes" ? (
            <DeleteAnime id={note._id} /> 
        ):(
            <DeleteManga id={note._id} /> 
        )}

           
    </StyledNote>  
    )  
}

export default Note;