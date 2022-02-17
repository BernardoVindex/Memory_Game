import styled, { css }  from "styled-components";

export const Figure = styled.li`
  min-height: 40px;
  min-width: 40px;
  color: white;
  border-radius: 10px;
  background-color: #892938;
  font-size: 2.25rem;
  list-style: none;
  &[disabled] {
  /* background-color: grey; */
  opacity: 0.3;
}

  ${props => props.fliped && css`
  background-color: purple;
  `}
/* 
  ${props => props.matched && css`
  background-color: rorangeed;
  `} */
`