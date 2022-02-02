import styled from "styled-components";

export const  ButtonForm = styled.button`
  min-width: 80px;
  min-height: 50px;
  color: white;
  background-color: #162938;
  border-radius: 10%;
  margin: 5px;

  ${props => props.value && css`
    background-color: red;
  `}
`