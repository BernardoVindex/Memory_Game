import styled, { css } from "styled-components";

export const  ButtonForm = styled.button`
  min-width: 75px;
  min-height: 30px;
  height: 40px;
  color: white;
  background-color: #162938;
  border-radius: 5px;
  margin: 5px;
  

  ${props => props.className === 'Start Game!' && css`
  margin: 25px 0; 
  width: 80%;
  font-size: 2rem;
  border-radius: 20px;
  background-color: orange;
  `} 

  ${props => props.className === 'Restart' && css`
  margin: 0 0 0 auto; 
  border-radius: 5px;
  background-color: orange;
  `}
`
