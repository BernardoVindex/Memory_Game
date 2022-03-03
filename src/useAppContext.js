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

const initialGameState = {
  settings: true,
  playing: false,
  brake: false,
  gameBoard: false
}

const initialPlayerState = [
  {playerNum: 1, moves: 0, pairs: 0, time: 0, status: 'waiting' }
]


const reducer = (state, action) => {
  const newDeck = [...state]
  switch (action.type) {
    case 'newDeck':
      newDeck.length = 0
      for (let i = action.payload; i > 0; i--) { 
        newDeck.push({value: i, fliped: false, matched:false})
      }

      newDeck.forEach( (card, i) => 
        newDeck.unshift({value: i+1 , fliped: false, matched:false}) 
      )

      newDeck.sort(() => Math.random() - 0.5)
      
    return newDeck
    case 'flip':
      newDeck[action.ID].fliped = !action.fliped
      return newDeck
    case 'match':
      newDeck.map( card => {
        if (card.fliped) card.matched = true
      })
      return newDeck
    case 'unmatch':
      newDeck.map( card => {
        if (card.fliped) card.fliped = false
      })
      return newDeck
    default:
      throw new Error(`type action desconocido: ${action.type}`)
  }
}

const playerReducer = (state, action) => {
  const playerId = state.findIndex( player => player.status === action.playerStatus)
  const newParty = [...state]
  switch (action.type) {
    case 'makeParty':
      newParty.length = 0
      for (let i = 1 ; i <= action.payload; i++){
          newParty.push({ playerNum: i, moves: 0, pairs: 0, time: 0, status: 'waiting' })
      }
      return newParty
    case 'onTurn':
      newParty[playerId].status = 'onMatch'
      return newParty
    case 'onMove':
      newParty[playerId].moves += 1
      return newParty
    case 'onFinish':
      newParty[playerId].status = 'finish'
      newParty[playerId].time = action.payload
      return newParty
  }
}

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'configuring': 
      return  {
        ...state,
        settings: true,
        playing: false,
        brake: false,
        gameBoard: false
      }
    case 'playing': 
      return  {
        ...state,
        settings: false,
        playing: true,
        brake: false,
        gameBoard: false
      }
    case 'brake': 
      return  {
        ...state,
        settings: false,
        playing: false,
        brake: true,
        gameBoard: false
      }
    case 'endGame': 
      return  {
        ...state,
        settings: false,
        playing: false,
        brake: false,
        gameBoard: true
      }
    default:
      throw new Error(`type action desconocido: ${action.type}`)
  }
}

const gameModeReducer = (state, action) => {
  switch (action.type) {
    
  }
}

export const useAppContext = () => {
  // const [deck, deckDispatch] = useReducer(reducer, initialState)
  // const [gameState, gameDispatch] = useReducer(gameReducer, initialGameState)
  // const [players, playersDispatch] = useReducer(playerReducer, initialPlayerState)
  // const [gameMode, gameModeDispatch] = useReducer(gameModeReducer, [])
  
  const {   
    deck,
    deckGenerator,
    changeCardsValues,
    evalPairFliped
  } = useCards()

  const {
    players,
    partyGenerator,
    changePlayerValues
  } = usePlayers()

  const {
    //counter, // Risk of rendering every timer tick
    countDown,
    chronometer,
    clockType 
  } = useTimer()

  const [gameState, setGameState] = useState({
    settings: true,
    playing: false,
    brake: false,
    gameBoard: false
  })

  const [gameConfig, setGameConfig] = useState({
    typeOfCards: 'Num',
    gameMode: 'Speed_Run', //'deadLine'
    time: 60000, // Not determinated yet 
    //time: 01:00:00 (bttn1 = 60,000-5,000) (bttn1 = 60,000+5,000)
    pairs: 5,
    players: 4,
    gameStatus: 'configuring' // Not determinated yet
  })

  const changeGameState = (key) => {
    const defaultGameState = {
      settings: false,
      playing: false,
      brake: false,
      gameBoard: false
    }
    
    defaultGameState[key] =  true
    
    return  setGameState(defaultGameState)
  }
  
  useEffect(() => {
    // Prevet for unnecessary excecute on '.gameStatus' changes
    if (gameState.playing){
      deckGenerator(gameConfig.pairs)
      partyGenerator(gameConfig.player)
    }
  },[gameConfig])


  const checkForPlayers = () => {
    (players.some( player => player.status === 'waiting'))
      ? gameDispatch({type: 'brake'})
      : gameDispatch({type: 'endGame'})

    deckDispatch({ type: 'newDeck', payload: deck.length / 2})
  }

  useEffect(() => {
    const pairFliped = deck.filter( card => 
      card.fliped === true && card.matched === false 
    )
    if (pairFliped.length > 1) 
      evalPairFliped(pairFliped[0].value === pairFliped[1].value)
      
    if (!deck.some((card) => card.matched === false)) {
      checkForPlayers()
    }
  },[deck])

  return {
  }
}
