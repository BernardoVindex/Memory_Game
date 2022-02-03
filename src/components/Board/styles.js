import styled from 'styled-components'

export const GridSection = styled.section`
  min-width: 300px;
  width: 90%;
  display: inline-grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
  grid-template-rows: 60px 60px 60px 60px 60px;
  grid-auto-flow: columns;
  place-items: center;
  text-align: center;

  border: 1px solid black;
`