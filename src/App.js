
import { GlobalStyles } from './styles/GlobalStyles'
import { Board } from './components/Board/index'
import { Settings } from './components/Seting'
<<<<<<< HEAD
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

=======
  
export const App = () => {
  const {
    pairs,
    setPairs
  } = appContext()
>>>>>>> 5af4f9fda4780e811d9c871b337b1f1fdb15de67

  return (
  <>
    <GlobalStyles />
<<<<<<< HEAD
    <Board
      cards={cards}
    >
    </Board>
    <Settings />
=======
    <Board />
    <Settings onClick={setPairs} />
    <h1>El estado es {pairs}</h1>
>>>>>>> 5af4f9fda4780e811d9c871b337b1f1fdb15de67
  </>  
  )
}