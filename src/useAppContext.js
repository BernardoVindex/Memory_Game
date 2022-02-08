import { useState } from "react"

export const useAppContext = () => {
 
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

  console.log(cards)

  const [players, setPlayers] = useState([
    {playerNum: 1, moves: 0, pairs: 0, time: 0, onMach: true }
  ])

  const [openModal, setOpenModal] = useState(false)


  const handlerDeck = (value) => {
    const sortedDeck = [] 
    for (let i = value; i > 0; i--){
        sortedDeck.push({value:i, fliped: false, matched:false})
    }
    
    const fullDeck = [...sortedDeck,...sortedDeck]

    handlerShuffler(fullDeck)
  }

  const handlerShuffler = (deck) => {
    deck.sort(() => Math.random() - 0.5)
    
    setCards(deck)
    setOpenModal(false)
  }

  const handlerPlayers = (value) => {
    const party = [] 
    for (let i = 1 ; i <= value; i++){
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

  const handlerTurn = (cardID) => {
    console.log(cardID)
    cards[cardID].fliped = true
    console.log(cards)
  }

  // const hanlderConfig = () => {
  //   setFunction( prevState => ({
  //     ...prevState,
  //     [typeState] : value
  //   }))
  // }

  return {
    cards,
    openModal,
    players,
    setCards,
    setPlayers,
    setOpenModal,
    
    handlerDeck,
    handlerShuffler,
    handlerPlayers,
    handlerTurn,
  }
}