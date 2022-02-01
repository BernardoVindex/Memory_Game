import { Card } from "../Card"

export const Board = (props) => {

    return (
    <>
      <section>
        {props.cards.map( card => {
          return (
          <Card 
            key={card.id}
            value={card.value}
          />
          )
        })}
      </section>
    </>
  )
}