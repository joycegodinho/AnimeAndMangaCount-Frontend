import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    padding: 2em;
    background: #FFFAFD;

    @media (max-width: 700px) {
        padding-top: 64px;
    }

    @media (min-width: 700px) {
        position: fixed;
        width: 180px;
        height: calc(100% - 64px);
    }
`;

const NavList = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style: none;
    line-height: 2;



    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1.1em;
        color: #000000;
    }

    a:visited {
        color: #000000;
    }

    a:hover,
    a:focus {
        color: #0077cc;
    }
`;
const StyledMark = styled.mark`
    background-color: #BFD2FF; 
    border-radius: 0.2em 0.2em;
    
`;


const Navigation = () => {

    return (
        <Nav>
            <NavList>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/animes">Animes</Link>
                </li>
                <li>
                    <Link to="/mangas">Mangas</Link>
                </li>
                <li>
                    <StyledMark>
                        <Link to='anime/new'>+ new Anime</Link>
                    </StyledMark>
                    
                </li>
                <li>
                    <StyledMark>
                        <Link to='manga/new'>+ new Manga</Link>
                    </StyledMark>
                    
                </li>
            </NavList>
        </Nav>
    );
}

export default Navigation;