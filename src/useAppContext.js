import { useState, useReducer, useEffect } from 'react'
import { useCards } from './hooks/useCards'
import { usePlayers } from './hooks/usePlayers'
import { useTimer } from './hooks/useTimer'

export const useAppContext = () => {
  
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
    gameMode: 'Speed_Run', //'Dead_Line'
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

  console.log(gameConfig)

  return {
    deck,
    deckGenerator,
    changeCardsValues,
    evalPairFliped,

    players,
    partyGenerator,
    changePlayerValues,

    countDown,
    chronometer,
    clockType,

    gameState, 
    setGameState,

    gameConfig, 
    setGameConfig
  }
}
