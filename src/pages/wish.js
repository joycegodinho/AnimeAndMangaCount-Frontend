import React, { useState, useEffect } from 'react';
import FeedWish from '../components/FeedWish';
import axios from 'axios'


const Wish = () => {
    const [value, setValue] = useState([])
    useEffect(() => {
        document.title = 'Wish List'
        const getAll = async () => {
            try {
              const {data: value} = await axios.get('http://localhost:1234/wish');  
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
            <p>These is my home page</p>
            <FeedWish notes={value} />
        </div>
    );
}

export default Wish;