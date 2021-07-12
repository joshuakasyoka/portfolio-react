import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 3px;
  border-color: #F3804F;
  border-style: solid;
  margin: 100px 200px 100px 200px;
  height: 100%;
  `

export const SubNav = styled.div`
  display: flex;    
  flex-direction: row;
  padding: 10px;
  align-items: center;
  justify-content: space-around;
  color: #F3804F;
  border-width: 3px;
  border-color: #F3804F;
  border-style: solid; 
`

export const MainSection = styled.div`
  display: flex;
  flex-direction: row;
  `

export const LeftBar = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  `
  
export const DesignBar = styled.div`
  
  height: 70%;
  display: flex;
  flex-direction: column;
  border-left: 3px;
  border-right: 3px;
  border-color: #F3804F;
  border-style: solid;
  justify-content: center;
  `

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  align-content: space-between;
  margin: 40px 30px 40px 30px;
  `

export const AboutBar = styled.div`
  display: flex;
  flex-direction: row;
  border-left: 3px;
  border-right: 3px;
  border-color: #F3804F;
  border-style: solid;
  height: 420px;
  align-items: center;
  justify-content: center;
  align-content: center;
  `

export const RightBar = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-width: 3px;
  border-color: #F3804F;
  border-style: solid; 
`
export const Writing = styled.p`
  margin: 20px 20px 20px 20px;
  font-family: 'Roboto';
  text-align: justify;
  height: 401px;
  `
export const Footer= styled.div`
display: flex;    
flex-direction: row;
padding: 10px;
align-items: center;
justify-content: space-around;
color: #F3804F;
border-width: 3px;
border-color: #F3804F;
border-style: solid; 
`

export const Tag= styled.p`
border-width: 2px;
border-color: #F3804F;
border-style: solid; 
border-radius: 10pc;
padding: 3px 6px 3px 6px;
  &:hover {
    color: #FFFFFF;
    background-color: #F3804F;
  }
`

