
import { GlobalStyles } from './styles/GlobalStyles'
import { Board } from './components/Board/index'
import { Settings } from './components/Seting'
  
export const App = () => {
  const {
    pairs,
    setPairs
  } = appContext()

  return (
  <>
    <GlobalStyles />
    <Board />
    <Settings onClick={setPairs} />
    <h1>El estado es {pairs}</h1>
  </>  
  )
}