import React, { useState, useEffect } from 'react';
import Feed from '../components/Feed';
//import { getAll } from '../services/animes.services';

import axios from 'axios'

const Animes =  () => {
    const [animes, setAnimes] = useState([])

    useEffect(() => {
        document.title = 'Animes'
        const getAll = async () => {
            try {
              const {data: animes} = await axios.get('http://localhost:1234/animes');  
              setAnimes(animes)
              console.log(animes)
            } catch (error) {
              console.error(error);
            }   
        }
        getAll();
    },[]);


    return (
        <div>
            <Feed notes={animes} />
        </div>
    );
}

export default Animes;