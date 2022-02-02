
import { GlobalStyles } from './styles/GlobalStyles'
import { Board } from './components/Board/index'
import { Settings } from './components/Seting'
import { useAppContext } from './useAppContext'
import { ModalSection } from './components/Modal/styles'

export const App = () => {
  // const [cards, setCards] = useState([
  //   {id:1,value:1},
  //   {id:2,value:2},
  //   {id:3,value:3},
  //   {id:4,value:4}
  // ])
  
  const {
    cards,
    configGame,
    setConfigGame,
    } = useAppContext()

  console.log({configGame})
  return (
  <>
    <GlobalStyles />
    <Board
      cards={cards}
    > 
      {/* {(typeCards === 'Num') && numDeck} */}

    </Board>
    <ModalSection>
    <Settings
      configGame={configGame}
      setConfigGame={setConfigGame}
    />
    </ModalSection>
    
  </>  
  )
}
