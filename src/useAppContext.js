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
    case 'newDeck':
      newSate.length = 0
      for (let i = action.payload; i > 0; i--) { 
        newSate.push({value: i, fliped: false, matched:false})
      }

      newSate.forEach( (card, i) => 
        newSate.unshift({value: i+1 , fliped: false, matched:false}) 
      )

      newSate.sort(() => Math.random() - 0.5)
      
    return newSate
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
    {playerNum: 1, moves: 0, pairs: 1, time: 0, status: 'await' }
  ])

  const [startGame, setStartGame] = useState(false)

  const [timeLeft, setTimeLeft] = useState(0)

  const [openModal, setOpenModal] = useState(true)
  
  const handlerDeck = (value) => {
    dispatch({ type: 'newDeck', payload: value})
    //setOpenModal(false)
  } 

  const handlerPlayers = (value) => {
    const party = [] 
    for (let i = 1 ; i <= value; i++){
        party.push({ playerNum: i, moves: 0, pairs: 0, time: 0, status: 'await' })
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

    if (!state.some((card) => card.matched === false)) endOfTurn()
    
  },[state])

  useEffect(() => {
    setOpenModal(false)
  }, startGame)

  const endOfTurn = () => {
 
    const playerScore = [...players]
    const playerIndex = players.findIndex( player => player.status === 'onMatch')
    playerScore[playerIndex] =     {
        moves: currentMoves,
        pairs: currentPair,
        time: currentTIME,
        status: 'finish'
      }
    
    setPlayers(playerScore)  



    if (playerIndex !== -1) {
      // Find a new player watting
      const playerIndex = players.findIndex( player => player.status === 'await')
      // Put him on Match
      playerScore[playerIndex].status = 'onMatch' 
      // Reestart game on true to set Timer on ture again
      setStartGame(true)
      // 'shuffle deck'
      dispatch({ type: 'newDeck', payload: state.length / 2})
    } else {
      
      setWinScrean(true)
    }


  }

  return {
    players,
    startGame,
    timeLeft,
    openModal, 
    setOpenModal,
    setTimeLeft,
    setPlayers,
    setStartGame,
    
    handlerDeck,
    handlerPlayers,

    state, 
    dispatch,
  }
}

/**
 * Start game
 * transiton : Reade 3,2,1 {Transition component}
 * Set player.status = 'onMatch' in {Timer component}
 * Start timer {Timer component}
 * At set all card´s as matched {App Context component}
 * Set player.status = 'finished' {App Context component}
 * Look for more player.status = 'await' {App Context component}
 * Repeat trnsition or set winScrean
 */
