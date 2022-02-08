import { useState } from "react"

export const useAppContext = () => {
  const [configGame, setConfigGame] = useState({
    typeCards: 'Img',
    pairs: 5,
    players: 1,
    start: false
  })
  
  const [cards, setCards] = useState([
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
  /***********            Helper Funct             **********/
  /**********************************************************/


  const randomSorter = (sortedDeck) => {
    const playebleDeck = [...sortedDeck,...sortedDeck]
    playebleDeck.sort(() => Math.random() - 0.5)
    
    setCards(playebleDeck)

    // setCards(playebleDeck.forEach((card, i) => card.id = i + 1) )

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

  console.log(cards)

  return {
    cards,
    configGame,
    openModal,
    players,
    setCards,
    setPlayers,
    setOpenModal,
    setConfigGame
  }
}