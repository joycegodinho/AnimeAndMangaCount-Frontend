import React from 'react';
import styled from 'styled-components';

const HeaderBar = styled.header`
    width: 100%;
    padding: 1.5em 2em;
    diplay: flex;
    height: 64px
    position: fixed;
    align-items: center;
    background-color: #FEF8FA;
    box-shadow: 0 0 1.5px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;

`;

const LogoText = styled.h1`
    margin: 220px;
    margin-top: 40px;
    padding: 0;
    display: inline;
    color: #ca1414;
`;


const Header = () => {
    return (
        <HeaderBar>
            <LogoText>Anime and Manga Record</LogoText>
        </HeaderBar>
    )
}

export default Header;