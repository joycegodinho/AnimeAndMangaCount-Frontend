import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    padding: 4em;
    background-color: #FEF8FA;


    @media (max-width: 700px) {
        padding-top: 64px;
    }

    @media (min-width: 700px) {
        position: fixed;
        width: 250px;
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
        font-size: 1.18em;
        color: #6b0003;
    }

    a:visited {
        color: #6b0003;
    }

    a:hover,
    a:focus {
        color: #e9635e;
    }
`;
const StyledMark = styled.mark`
    background-color: #e9a8a1; 
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
                    <Link to="/wish">Wish List</Link>
                </li>
                <li>
                    <StyledMark>
                        <Link to='anime/new'>++ Anime</Link>
                    </StyledMark>
                    
                </li>
                <li>
                    <StyledMark>
                        <Link to='manga/new'>++ Manga</Link>
                    </StyledMark>
                    
                </li>
                <li>
                    <StyledMark>
                        <Link to='wish/new'>++ Wish</Link>
                    </StyledMark>
                    
                </li>
            </NavList>
        </Nav>
    );
}

export default Navigation;