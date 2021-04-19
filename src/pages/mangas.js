import React, { useState, useEffect } from 'react';
import Feed from '../components/Feed';
import axios from 'axios'

const Mangas = () => {
    const [mangas, setMangas] = useState([])

    useEffect(() => {
        document.title = 'Mangas'
        const getAll = async () => {
            try {
              const {data: mangas} = await axios.get('http://localhost:1234/mangas');  
              setMangas(mangas)
              console.log(mangas)
            } catch (error) {
              console.error(error);
            }   
        }
        getAll();
    },[]);
    return (
        <div>
            <h1>Manga Count</h1>
            <p>These are my mangas</p>
            <Feed notes={mangas} />
        </div>
    );
}

export default Mangas;