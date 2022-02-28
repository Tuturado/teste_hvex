import styled from "styled-components";

//Estilização usando styled components
export const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #FFFFFF;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: sans-serif;
    border-radius: 8px;
`;

export const NavBar = styled.div`
    width: 100%;
    padding-top: 1%;
    padding-bottom: 1%;
    position: fixed;
    background-color: #10486D;
    z-index: 99;
    color: #FFFFFF;
`;
