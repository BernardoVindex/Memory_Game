import { useState, useEffect } from 'react'

const initialPlayerState = [
  {playerNum: 1, moves: 0, pairs: 0, time: 0, status: 'waiting' },
  {playerNum: 2, moves: 0, pairs: 0, time: 0, status: 'waiting' },
  {playerNum: 3, moves: 0, pairs: 0, time: 0, status: 'waiting' },
  {playerNum: 4, moves: 0, pairs: 0, time: 0, status: 'waiting' }
]

export const usePlayers = (pairs) => {
  const [players, setPlayers] = useState(initialPlayerState)
  const newPartyValues = [...players]


  const partyGenerator = (partySize) => {
    // Checkfor refactor
    // const playerBase = {
    //   playerNum: 1,
    //   moves: 0,
    //   pairs: 0,
    //   time: 0,
    //   status: 'waiting'
    // }

    // const party = new Array(partySize).fill(playerBase)
    // party.forEach((player, index) => player.playerNum = index + 1)
    
    const newParty = []
    for (let i = 1 ; i <= partySize; i++){
      newParty.push({
      playerNum: i,
      moves: 0,
      pairs: 0,
      time: 0,
      status: 'waiting' 
    })
  }
    setPlayers(newParty)
  }

  const changePlayerValues = (
    currentStatus,
    targetKey,
    newValue
    ) => {
    const playerId = newPartyValues.findIndex( player => 
      player.status === currentStatus
    )
    
    if (targetKey === 'moves')
      return newPartyValues[playerId].moves += newValue
    
    newPartyValues[playerId][targetKey] = newValue

    setPlayers(newPartyValues)
  }

  return {
    players,
    partyGenerator,
    changePlayerValues
  }
}