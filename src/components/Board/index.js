import { Card } from "../Card"
import { GridSection } from "./styles"

export const Board = ({ cards }) => {
    
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
      </GridSection>
    </>
  )
}