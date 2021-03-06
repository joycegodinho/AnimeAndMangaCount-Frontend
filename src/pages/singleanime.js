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

const AnimePage =  props => {
    const [anime, setAnime] = useState([])
    
    

    useEffect(() => {
        document.title = 'Anime'
        const getAnime = async () => {
            try {
              const id = await props.match.params.id
              console.log(id)
              const {data: anime} = await axios.get(`http://localhost:1234/animes/${id}`);  
              
              await setAnime(anime)
              
              console.log(anime)
            } catch (error) {
              console.error(error);
            }   
        }
        getAnime();
    }, []);

    console.log(anime)

    return (
        <StyledNote>
            <h3>{anime.title}</h3>
            <h4>
                <em>Number </em>
                    <StyledMark>
                        {anime.number}
                    </StyledMark>
            </h4>            
            <ReactMarkdown source={anime.content} />
        </StyledNote>
    );
}

export default AnimePage;