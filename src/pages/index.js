import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home';
import Animes from './animes';
import Mangas from './mangas';


const Pages = () => {
    return (
        <Router> 
            <Route exact path="/" component={Home} /> 
            <Route path="/animes" component={Animes} /> 
            <Route path="/mangas" component={Mangas} />   
        </Router>
    );
};


export default Pages;