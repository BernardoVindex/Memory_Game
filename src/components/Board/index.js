import { GridSection } from "./styles"

export const Board = ({ cards, render, evalPairFliped }) => {
  const renderFunc = render
  
  return (
    <>
      <GridSection>
         {cards.map(renderFunc)}
      </GridSection>
    
    </>
  )
}