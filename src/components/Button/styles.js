import styled, { css } from "styled-components";

export const  ButtonForm = styled.button`
  min-width: 50px;
  min-height: 30px;
  color: white;
  background-color: #162938;
  border-radius: 5px;
  margin: 0 5px;
  

  ${props => props.buttonName === 'Start Game!' && css`
  margin: 25px 0; 
  width: 80%;
  font-size: 2rem;
  border-radius: 20px;
  background-color: orange;
  `} 

  ${props => props.buttonName === 'Restart' && css`
  margin: 25px 0; 
  border-radius: 5px;
  background-color: orange;
  `} 
`
