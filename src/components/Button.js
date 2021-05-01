import styled from 'styled-components';

const Button = styled.button` 
    display: block;
    border-top: 9em;
    padding-top: 1em;
    padding-bottom: 1em;
    margin-bottom: 9em;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    color: #6b0003;
    background-color: #e9a8a1;
    cursor: pointer;

    :hover {
        background-color: #e9635e;
    }

    :active {
        background-color: #e9635e;
    }
`;

export default Button;