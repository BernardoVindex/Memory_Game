import { Card } from "../Card"
import { GridSection } from "./styles"

export const Board = ({ cards }) => {
  // const renderFunc = props.children || props.rende  

  
    return (
    <>
      <GridSection>
        {cards.map( (card, i) => {
           card.id = i + 1
          return (
          <Card 
            key={card.id}
            value={card.value}
          />
          )
        })}
        {/* {props.cards.map(renderFunc)}
        {props.children} */}
      </GridSection>
    
    </>
  )
}