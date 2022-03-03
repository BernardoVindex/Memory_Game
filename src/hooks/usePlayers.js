import { useState, useEffect } from 'react'

export const usePlayers = (pairs) => {
  const [players, setPlayers] = useState([])
  
  const partyGenerator = (partySize) => {
    const playerBase = {
      playerNum: 1,
      moves: 0,
      pairs: 0,
      time: 0,
      status: 'waiting'
    }
    const party = new Array(partySize).fill(playerBase)

    setPlayers(party)
  }

  const changePlayerValues = (
    playerID, 
    atribute,
    value) => {

  }


  return {
    players,
    partyGenerator,
  }
}