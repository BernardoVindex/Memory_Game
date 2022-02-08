import { GridSection } from "./styles"

export const Board = (props) => {
  const renderFunc = props.render

    return (
    <>
      <GridSection>
        
        {/* {cards.map( (card, i) => {
           card.id = i + 1
          return (
          <Card 
            key={card.id}
            value={card.value}
          />
          )
        })} */}
        {props.cards.map(renderFunc)}
      </GridSection>
    
    </>
  )
}