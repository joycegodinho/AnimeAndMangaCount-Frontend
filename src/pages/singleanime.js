import React, { useState, useEffect } from 'react';
import Note from '../components/Note';
//import { getAll } from '../services/animes.services';

import axios from 'axios'

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
        <div>
            <p>These is my anime</p>
            
            <div>
       
                    
            </div>
        </div>
    );
}

export default AnimePage;