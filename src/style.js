import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: fuchsia;
`;

export const Content = styled.div`
    width:80%;
    min-height: 80%;
    background-color: silver;
`;

export const Rows = styled.div`
    width: 100%;
    height: 20vh;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
`;