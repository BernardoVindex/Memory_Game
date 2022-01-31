import { Card } from "../Card"

export const Board = (props) => {
  // console.log(props.cards)
  // console.log(props.cards[0].id)

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