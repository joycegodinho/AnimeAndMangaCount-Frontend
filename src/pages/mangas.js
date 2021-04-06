import React, { useEffect } from 'react';

const Mangas = () => {
    useEffect(() => {
        document.title = 'Mangas'
    });
    return (
        <div>
            <h1>Manga Count</h1>
            <p>These are my mangas</p>
        </div>
    );
}

export default Mangas;