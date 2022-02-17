import { useState, useReducer, useEffect } from 'react'

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

const reducer = (state, action) => {
  const newSate = [...state]
  switch (action.type) {
    case 'flip':
      newSate[action.ID].fliped = !action.fliped
      return newSate
    case 'match':
      newSate.map( card => {
        if (card.fliped) card.matched = true
      })
      return newSate
    case 'unmatch':
      newSate.map( card => {
        if (card.fliped) card.fliped = false
      })
      return newSate
    default:
      throw new Error(`type action desconocido: ${action.type}`)
  }
}

export const useAppContext = () => {

  const [state, dispatch] =  useReducer(reducer, initialState)
 
  const [players, setPlayers] = useState([
    {playerNum: 1, moves: 0, pairs: 1, time: 0, onMach: true }
  ])

  const [openModal, setOpenModal] = useState(false)

  const [startGame, setSartGame] = useState(false)
  
  const handlerDeck = (value) => {
    const sortedDeck = [] 
    for (let i = value; i > 0; i--){
        sortedDeck.push([value])
    }

    sortedDeck.forEach( (card, i) => 
      sortedDeck.unshift([value])
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


  const evalPairFliped = (pairFliped) => {
    (pairFliped[0].value === pairFliped[1].value)
      ? dispatch({ type: 'match'})
      : dispatch({ type: 'unmatch'})
  }

  useEffect(() => {
    const pairFliped = state.filter( card => 
      card.fliped === true && card.matched === false 
    )
    if (pairFliped.length > 1) evalPairFliped(pairFliped)
  },[state])


  return {
    openModal,
    players,
    startGame,
    setPlayers,
    setOpenModal,
    setSartGame,
    
    handlerDeck,
    handlerPlayers,

    state, 
    dispatch,
  }
}