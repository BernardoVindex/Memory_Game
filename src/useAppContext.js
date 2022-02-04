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

  const [openModal, setOpenModal] = useState({
    settingOn: false
  })

  const [players, setPlayers] = useState([
    {playerNum: 1, moves: 0, pairs: 0},
    {playerNum: 2, moves: 0, pairs: 0}
  ])

  const numDeck = () => {
    const sortedDeck = [] 

    for (let i = configGame.pairs; i > 0; i--){
        sortedDeck.push({value:i})
    }

   randomSorter(sortedDeck)
  }

  const stateSetter = () => {

  }

  const randomSorter = (sortedDeck) => {
    const playebleDeck = [...sortedDeck,...sortedDeck]
    
    playebleDeck.sort(() => Math.random() - 0.5)
    // playebleDeck.forEach((card, i) => card.id = i + 1) 
    

    setCards(playebleDeck)
    setConfigGame( prevState => ({
      ...prevState,
      start: false
    }))
    setOpenModal({settingOn : false})
  }

    if (configGame.start === true) {
      numDeck()
    }

  // console.log({ configGame })
  // console.log(configGame.typeCards)
  // console.log(configGame.pairs)
  // console.log(configGame.players)
   
  console.log(cards)

  return {
    cards,
    configGame,
    openModal,
    players,
    setPlayers,
    setOpenModal,
    setConfigGame
  }
}