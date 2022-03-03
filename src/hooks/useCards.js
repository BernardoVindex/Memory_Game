import { useState, useEffect } from 'react'

export const useCards = (pairs) => {
  const [deck, setDeck] = useState([])

  const deckGenerator = (pairs) => {
    const cardBase = {
      value: valueCard,
      fliped: false,
      matched:false
    }
    const deck =  new Array(pairs).fill(cardBase)
    
    deck.forEach((card, i) => 
      deck.unshift(cardBase)
    )

    setDeck(deck)
  }

  const changeCardsValues = (cardID, atribute, value) => {
    const newDeck = [...deck]
    newDeck[cardID][atribute] = value

    return setDeck(newDeck)
  }




  return {
    deck,
    deckGenerator,
    changeCardsValues
  }
}