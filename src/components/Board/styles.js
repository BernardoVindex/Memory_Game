import styled from 'styled-components'

export const GridSection = styled.section`
  min-width: 300px;
  width: 90%; 
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(5, minmax(40px, 1fr));
  /* grid-template-rows: repeat(2, minmax(55px, 1fr)); */
  grid-auto-flow: columns;
  place-items: stretch;
  text-align: center;
  place-content: center;

  border: 1px solid black;
`