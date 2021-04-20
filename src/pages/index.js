import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from '../components/Layout';

import Home from './home';
import Animes from './animes';
import Mangas from './mangas';
import AnimePage from './singleanime';
import MangaPage from './singlemanga';


const Pages = () => {
    return (
        <Router> 
            <Layout>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/animes" component={Animes} /> 
                <Route exact path="/mangas" component={Mangas} /> 
                <Route path="/animes/:id" component={AnimePage} /> 
                <Route path="/mangas/:id" component={MangaPage} />
            </Layout>
  
        </Router>
    );
};


export default Pages;