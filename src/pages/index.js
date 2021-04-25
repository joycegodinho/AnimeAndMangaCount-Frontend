import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Layout from '../components/Layout';

import Home from './home';
import Wish from './wish'
import Animes from './animes';
import Mangas from './mangas';
import AnimePage from './singleanime';
import MangaPage from './singlemanga';
import NewAnime from './newanime';
import NewManga from './newmanga'
import EditAnime from './editanime';
import EditManga from './editmanga'


const Pages = () => {
    return (
        <Router> 
            <Layout>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/wish" component={Wish} /> 
                <Route exact path="/animes" component={Animes} /> 
                <Route exact path="/mangas" component={Mangas} /> 
                <Route exact path="/animes/:id" component={AnimePage} /> 
                <Route exact path="/mangas/:id" component={MangaPage} />
                <Route exact path="/manga/edit/:id" component={EditManga} />
                <Route exact path="/anime/edit/:id" component={EditAnime} />
                <Route exact path="/anime/new" component={NewAnime} /> 
                <Route exact path="/manga/new" component={NewManga} />
                
            </Layout>
  
        </Router>
    );
};


export default Pages;