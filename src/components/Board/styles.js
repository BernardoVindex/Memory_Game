import styled from 'styled-components'

export const GridSection = styled.section`
  width: 90%;
  display: inline-grid;
  grid-template-columns: 60px 60px 60px 60px 60px 60px  60px;
  grid-template-rows: 60px 60px 60px 60px 60px 60px  60px;
  grid-auto-flow: columns;
  place-items: center;
  text-align: center
`