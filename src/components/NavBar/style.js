import styled from 'styled-components';

export const Container = styled.div`
    border-width: 2px;
    border-color: #F3804F;
    border-style: solid;
    display: flex;
    flex-direction: row;
    height: 10%;
    width: 100%;
`

export const LeftSidebar = styled.div`
    border-width: 2px;
    border-color: #F3804F;
    border-style: solid;
    display: flex;
    flex-direction: column;
    width: 30%;
`

export const RightSidebar = styled.div`
    border-width: 2px;
    border-color: #F3804F;
    border-style: solid;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
`

export const TitleBox = styled.div`
    border-width: 2px;
    border-color: #F3804F;
    border-style: solid;
    display: flex;
    align-items: center;
    justify-content: left;
    height: 50%;
`

export const InnerImage = styled.img`
    height: 230px;
`

export const Title = styled.h1`
    font-size: 50px;
    font-family: 'Roboto', sans-serif;
    margin-left: 10px;
    &:hover {
        font-size: 50px;
        font-family: 'Roboto', sans-serif;
        margin-left: 10px;
        color: #B3C34D;
    }
`
