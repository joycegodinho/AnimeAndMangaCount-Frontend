import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Layout from '../components/Layout';

import Home from './home';
import Animes from './animes';
import Mangas from './mangas';
import AnimePage from './singleanime';
import MangaPage from './singlemanga';
import NewAnime from './newanime';
import NewManga from './newmanga'


const Pages = () => {
    return (
        <Router> 
            <Layout>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/animes" component={Animes} /> 
                <Route exact path="/mangas" component={Mangas} /> 
                <Route exact path="/animes/:id" component={AnimePage} /> 
                <Route exact path="/mangas/:id" component={MangaPage} />
                <Route exact path="/anime/new" component={NewAnime} /> 
                <Route exact path="/manga/new" component={NewManga} />
                
            </Layout>
  
        </Router>
    );
};


export default Pages;