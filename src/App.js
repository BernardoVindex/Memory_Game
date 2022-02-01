
import { GlobalStyles } from './styles/GlobalStyles'
import { Board } from './components/Board/index'
import { Settings } from './components/Seting'
import { useAppContext } from './useAppContext'
import { useState } from 'react'

export const App = () => {
  const [cards, setCards] = useState([
    {id:1,value:1},
    {id:2,value:2},
    {id:3,value:3},
    {id:4,value:4}
  ])
  
  
  const {
    configGame,
    setConfigGame,
    } = useAppContext()

  return (
  <>
    <GlobalStyles />
    <Board
      configGame={configGame}
      setConfigGame={setConfigGame}
      cards={cards}
    > 
      {/* {(typeCards === 'Num') && numDeck} */}

    </Board>
    <Settings
      configGame={configGame}
      setConfigGame={setConfigGame}
    />
  </>  
  )
}
