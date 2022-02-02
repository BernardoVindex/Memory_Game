import { Card } from "../Card"
import { GridSection } from "./styles"

export const Board = ({ cards }) => {
    
    return (
    <>
      <GridSection>
        {cards.map( card => {
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