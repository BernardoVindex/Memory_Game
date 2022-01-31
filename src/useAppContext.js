import { useState } from "react"

export const useAppContext = () => {
  const [typeCards, setTypeCards] = useState('Num')
  const [pairs, setPairs] = useState(8)
  const [players, setPlayers] = useState(1)
  const [start, setStart] = useState(false)
  const [deck, setDeck] = useState()

  const numDeck = () => {
    const sortedDeck = [] 

    for (let i = pairs; i > 0; i--){
        sortedDeck.push({id:undefined, value:i})
    }
  return randomSorter(sortedDeck)
  }

  const randomSorter = (sortedDeck) => {
    const duplicatedDeck = [...sortedDeck,...sortedDeck]
    const playebleDeck = []

    while (duplicatedDeck.length > 0) {
        let target = Math.floor(Math.random() * duplicatedDeck.length)

        playebleDeck.push(duplicatedDeck[target])
        duplicatedDeck.splice(target, 1)
    }

    setDeck(playebleDeck)
  }

  if (typeCards === 'Num') {
    numDeck(pairs)
  }

  console.log({ deck })
  console.log({ pairs })
  return {
    typeCards,
    pairs,
    players,
    start,
    deck,
    setPairs,
    setTypeCards,
    setPlayers,
    setStart
  }
}