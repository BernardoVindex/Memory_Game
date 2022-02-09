import { GridSection } from "./styles"

export const Board = ({ cards, render, evalPairFliped }) => {
  const renderFunc = render
  
  const pairFliped = cards.filter( card => card.fliped === true )

  {(pairFliped.length > 1) && evalPairFliped(pairFliped)}

  return (
    <>
      <GridSection>
         {cards.map(renderFunc)}
      </GridSection>
    
    </>
  )
}