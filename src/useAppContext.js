import { useState } from "react"

export const useAppContext = () => {
  const [typeCards, setTypeCards] = useState('Num')
  const [pairs, setPairs] = useState(8)
  const [players, setPlayers] = useState(1)
  const [start, setStart] = useState(false)
  
  return {
    typeCards,
    pairs,
    players,
    start,
    setPairs,
    setTypeCards,
    setPlayers,
    setStart
  }
}

