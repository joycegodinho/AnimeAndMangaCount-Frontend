import React, { useState, useEffect } from 'react';
import FeedAll from '../components/FeedAll';
import axios from 'axios'


const Home = () => {
    const [value, setValue] = useState([])
    useEffect(() => {
        document.title = 'Home'
        const getAll = async () => {
            try {
              const {data: value} = await axios.get('http://localhost:1234');  
              setValue(value)
              console.log(value)
            } catch (error) {
              console.error(error);
            }   
        }
        getAll();
    },[]);
    return (
        <div>
            <FeedAll notes={value} />
        </div>
    );
}

export default Home;