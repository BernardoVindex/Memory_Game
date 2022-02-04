import { useState } from "react"

export const useAppContext = () => {
  const [configGame, setConfigGame] = useState({
    typeCards: 'Img',
    pairs: 5,
    players: 1,
    start: false
  })
  
  const [cards, setCards] = useState([
    {id:1, value:1, fliped: false, matched:false},
    {id:2, value:2, fliped: false, matched:false},
    {id:3, value:3, fliped: false, matched:false},
    {id:4, value:4, fliped: false, matched:false},
    {id:5, value:5, fliped: false, matched:false},
    {id:1, value:1, fliped: false, matched:false},
    {id:2, value:2, fliped: false, matched:false},
    {id:3, value:3, fliped: false, matched:false},
    {id:4, value:4, fliped: false, matched:false},
    {id:5, value:5, fliped: false, matched:false},
  ])

  const [players, setPlayers] = useState([
    {playerNum: 1, moves: 0, pairs: 0, time: 0, onMach: true }
  ])

  const [openModal, setOpenModal] = useState({
    settingOn: false
  })


  /**********************************************************/
  /***********              Handlers               **********/
  /**********************************************************/
  
  
  const handlerNumCards = () => {
    const sortedDeck = [] 
    for (let i = configGame.pairs; i > 0; i--){
        sortedDeck.push({value:i})
    }
   randomSorter(sortedDeck)
  }

  const handlerPlayers = () => {
    const party = [] 
    for (let i = 1 ; i <= configGame.players; i++){
        party.push({
          playerNum: i,
          moves: 0,
          pairs: 0,
          time: 0,
          onMarch: true
        })
    }
   setPlayers(party)
  }


  /**********************************************************/
  /***********               Engine                **********/
  /**********************************************************/
  

  const firstFlip = () => {
    
  }


  /**********************************************************/
  /***********            Helper Funct             **********/
  /**********************************************************/


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

  
  /**********************************************************/
  /***********             Init Game               **********/
  /**********************************************************/
    
  
  if (configGame.start === true) {
    handlerNumCards()
    handlerPlayers()
  }

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