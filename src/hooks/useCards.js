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
    const cardBase = {
      value: valueCard,
      fliped: false,
      matched:false
    }
    const deck = new Array(pairs).fill(cardBase)
    
    deck.forEach((card, i) => deck.unshift(cardBase))
    deck.sort(() => Math.random() - 0.5)
    setDeck(deck)
  }

  const changeCardsValues = (
    cardID,
    atribute,
    value 
    ) => {
      newDeckValues[cardID][atribute] = value

    return setDeck(newDeckValues)
  }

  const evalPairFliped = (value) => {
    let cardKey
    
    (value)
      ? atribute = 'matched'
      : atribute = 'fliped'
    
      newDeckValues.map( card => {
      if (card.fliped) card[cardKey] = value
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