import React, { useEffect } from 'react';

import Button from '../components/Button';


const Home = () => {
    useEffect(() => {
        document.title = 'Home'
    });
    return (
        <div>
            <p>These is my home page</p>
            <Button>Click me!</Button>
        </div>
    );
}

export default Home;