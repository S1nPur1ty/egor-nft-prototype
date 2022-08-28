import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    box-sizing: border-box;
`;

export const Link = styled.a`
    margin-top: 20px;
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    color: #0ed847;
    border-bottom: 2px solid black;
    padding-bottom: 3px;
    transition: 300ms ease all;

    &:hover {
        color: #000;
    }
`;

export const Title = styled.h3`
    font-size: 2.4em;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 20px 0;
    font-style: italic;
`;

export const NFTImageContainer = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    max-width: 320px;
    width: 100%;
    border-radius: 2em;
    margin: 4em 0;
    position: relative;

    &:before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    @media screen and (max-width: 442px) {
        max-width: 200px;
    }
`;

export const Button = styled.button`
    position: relative;
    padding: 1em 4em;
    box-sizing: border-box;
    background: #11f250;
    border: none;
    font-size: 1.2em;
    outline: none;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 2em;
    transition: 300ms ease all;
    font-weight: bold;

    &:hover {
        background: #2ad058;
    }
`;

export const TextInput = styled.input`
    font-size: 18px;
    padding: 10px;
    margin: 0 0 20px 0;
    border: none;
    border-radius: 3px;
    min-width: 330px;
`;

export const LinkButton = styled.a`
    position: relative;
    padding: 1em 4em;
    box-sizing: border-box;
    background: #eea211;
    border: none;
    font-size: 1.2em;
    outline: none;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 2em;
    transition: 300ms ease all;
    font-weight: bold;

    &:hover {
        background: #b5b80d;
    }
`;