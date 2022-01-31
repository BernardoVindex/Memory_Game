
import { GlobalStyles } from './styles/GlobalStyles'
import { Board } from './components/Board/index'
import { Settings } from './components/Seting'
import { useAppContext } from './useAppContext'

export const App = () => {
  const {
    typeCards,
    pairs,
    players,
    start,
    deck
    } = useAppContext()

  console.log({deck})

  return (
  <>
    <GlobalStyles />
    <Board
      cards={deck}
    >
    </Board>
    <Settings />
  </>  
  )
}
