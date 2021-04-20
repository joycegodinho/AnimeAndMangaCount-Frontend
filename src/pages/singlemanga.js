import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import styled from 'styled-components';
import axios from 'axios';

import Note from '../components/Note';
//import { getAll } from '../services/animes.services';


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

const MangaPage =  props => {
    const [manga, setManga] = useState([])
    
    

    useEffect(() => {
        document.title = 'Manga'
        const getManga = async () => {
            try {
              const id = await props.match.params.id
              const x = await props.match
              console.log(x.path)
              console.log(id)
              const {data: manga} = await axios.get(`http://localhost:1234/mangas/${id}`);  
              
              await setManga(manga)
              
              console.log(manga)
            } catch (error) {
              console.error(error);
            }   
        }
        getManga();
    }, []);



    return (
        <StyledNote>
            <h3>{manga.title}</h3>
            <h4>
                <em>Number </em>
                    <StyledMark>
                        {manga.number}
                    </StyledMark>
            </h4>            
            <ReactMarkdown source={manga.content} />
        </StyledNote>
    );
}

export default MangaPage;