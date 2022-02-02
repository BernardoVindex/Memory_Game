import { useState } from "react"

export const useAppContext = () => {
  const [configGame, setConfigGame] = useState({
    typeCards: 'Img',
    pairs: 4,
    players: 4,
    start: false
  })
  
  const [cards, setCards] = useState([
    {id:1,value:1},
    {id:2,value:2},
    {id:3,value:3},
    {id:4,value:4}
  ])



  const numDeck = () => {
    const sortedDeck = [] 

    for (let i = configGame.pairs; i > 0; i--){
        sortedDeck.push({id:undefined, value:i})
    }

   randomSorter(sortedDeck)
  }

  const randomSorter = (sortedDeck) => {
    const playebleDeck = [...sortedDeck,...sortedDeck]
    
    playebleDeck.sort(() => Math.random() - 0.5)
    
    setCards(playebleDeck)
    setConfigGame( prevState => ({
      ...prevState,
      start: false
    }))
  }

    if (configGame.start === true) {
      numDeck()
    }

  // console.log({ configGame })
  // console.log(configGame.typeCards)
  // console.log(configGame.pairs)
  // console.log(configGame.players)
    
  return {
    cards,
    configGame,
    setConfigGame
  }
}