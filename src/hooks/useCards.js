import { useState } from 'react'

const initialState = [
  {value:1, fliped: false, matched:false},
  {value:2, fliped: false, matched:false},
  {value:3, fliped: false, matched:false},
  {value:4, fliped: false, matched:false},
  {value:5, fliped: false, matched:false},
  {value:1, fliped: false, matched:false},
  {value:2, fliped: false, matched:false},
  {value:3, fliped: false, matched:false},
  {value:4, fliped: false, matched:false},
  {value:5, fliped: false, matched:false},
]

export const useCards = (pairs) => {
  const [deck, setDeck] = useState(initialState)

  const newDeckValues = [...deck]
  
  const deckGenerator = (pairs) => {
    // Pending for refactor
    // const deck = new Array(pairs).fill({
    //   value: 0,
    //   fliped: false,
    //   matched:false
    // })
    
    // deck.forEach((card, i) => deck.unshift({
    //   value: 0,
    //   fliped: false,
    //   matched:false
    // }))
    
    const newDeck = []
    for (let i = pairs; i > 0; i--) { 
      newDeck.push({value: i, fliped: false, matched:false})
    }
    newDeck.forEach( (card, i) => 
      newDeck.unshift({value: i+1 , fliped: false, matched:false}) 
    )
    newDeck.sort(() => Math.random() - 0.5)
    
    return setDeck(newDeck)
  }

  const changeCardsValues = (
    cardID,
    atributeValue
    ) => {
      newDeckValues[cardID].fliped = !atributeValue

    return setDeck(newDeckValues)
  }

  const evalPairFliped = (resolve) => {
    let atribute
    
    (resolve)
      ? atribute = 'matched'
      : atribute = 'fliped'
    
      newDeckValues.map( card => {
      if (card.fliped) card[atribute] = resolve
    })

    setDeck(newDeckValues)
  }

  return {
    deck,
    deckGenerator,
    changeCardsValues,
    evalPairFliped
  }
}