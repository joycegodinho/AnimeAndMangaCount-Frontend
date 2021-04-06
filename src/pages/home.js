import React, { useEffect } from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation'

const Home = () => {
    useEffect(() => {
        document.title = 'Home'
    });
    return (
        <div>
            <Header />
            <Navigation />
            <p>These is my home page</p>

        </div>
    );
}

export default Home;