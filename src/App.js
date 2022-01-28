
import { GlobalStyles } from './styles/GlobalStyles'
import { Board } from './components/Board/index'
import { Settings } from './components/Seting'
import { useAppContext } from './useAppContext'
import { useState } from 'react'



export const App = () => {
  const [cards, setCards] = useState([
    {
      value:1,
      id:1    
    },
    {
      value:2,
      id:2    
    },
    {
      value:3,
      id:3    
    },
  ])
  console.log({ cards })

    const {
    typeCards,
    pairs,
    players,
    start,
    } = useAppContext()


  return (
  <>
    <GlobalStyles />
    <Board
      cards={cards}
    >
    </Board>
    <Settings />
  </>  
  )
}