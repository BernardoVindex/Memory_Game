import { useState, useReducer } from 'react'

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
];

const reducer = (state, action) => {
  
}

export const useAppContext = () => {

  const [state, dispatch] =  useReducer(reducer, initialState)
 
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
    {playerNum: 1, moves: 0, pairs: 1, time: 0, onMach: true }
  ])

  const [openModal, setOpenModal] = useState(false)

  const [startGame, setSartGame] = useState(false)
  
  const handlerDeck = (value) => {
    const sortedDeck = [] 
    for (let i = value; i > 0; i--){
        sortedDeck.push({value:i, fliped: false, matched:false})
    }

    sortedDeck.forEach( (card, i) => 
      sortedDeck.unshift({value:i, fliped: false, matched:false}  )
    )

    sortedDeck.sort(() => Math.random() - 0.5)
    setOpenModal(false)
    setCards(sortedDeck)  
  } 


   const handlerPlayers = (value) => {
     const party = [] 
     for (let i = 1 ; i <= value; i++){
         party.push({ playerNum: i, moves: 0, pairs: 0, time: 0, onMatch: true })
     }
    setPlayers(party)
   }


 const flipCard = (cardID, value) => {
   const copyState = [...cards]
   copyState[cardID].fliped = !value

   const pairFliped = copyState.filter( card => 
     card.fliped === true && card.matched === false 
   )
  
   if (pairFliped.length > 1) evalPairFliped(pairFliped, copyState)

   setCards(copyState)
 }


 const evalPairFliped = (pairFliped, copyState) => {
   if (pairFliped[0].value === pairFliped[1].value) {      
     copyState.forEach( card => {
       if (card.fliped) 
         card.matched = true
         card.fliped = false
     })
   } else {
     copyState.forEach( card => {
       if (card.fliped) 
         card.fliped = false
     })
   }

   setCards(copyState)
 }
  
  console.log(state)
  console.log(initialState)

  return {
    cards,
    openModal,
    players,
    startGame,
    setCards,
    setPlayers,
    setOpenModal,
    setStartGame,
    
    handlerDeck,
    handlerPlayers,
    flipCard,

    state, 
    dispatch,
  }
}