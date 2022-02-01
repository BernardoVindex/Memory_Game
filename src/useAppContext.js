import { useState } from "react"

export const useAppContext = () => {
  const [configGame, setConfigGame] = useState({
    typeCards: 'Img',
    pairs: 4,
    players: 1
  })
  

  
  const [typeCards, setTypeCards] = useState('Img')
  const [pairs, setPairs] = useState(8)
  const [players, setPlayers] = useState(1)
  const [start, setStart] = useState(false)
  const [cards, setCards] = useState([
    {id:1,value:1},
    {id:2,value:2},
    {id:3,value:3},
    {id:4,value:4}
  ])



  const numDeck = () => {
    const sortedDeck = [] 

    for (let i = pairs; i > 0; i--){
        sortedDeck.push({id:undefined, value:i})
    }

   randomSorter(sortedDeck)
  }

  const randomSorter = (sortedDeck) => {
    const playebleDeck = [...sortedDeck,...sortedDeck]
    playebleDeck.sort(() => Math.random() - 0.5)
    setCards(playebleDeck)
  }

  //  if (typeCards === 'Num') {
  //    numDeck()
  //  }

  console.log({ configGame })
  console.log(configGame.typeCards)
  console.log(configGame.pairs)
  console.log(configGame.players)
    
  return {
    configGame,
    setConfigGame
  }
}