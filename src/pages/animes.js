import React, { useEffect } from 'react';

const Animes = () => {
    useEffect(() => {
        document.title = 'Animes'
    });
    return (
        <div>
            <h1>Anime Count</h1>
            <p>These are my animes</p>
        </div>
    );
}

export default Animes;