import { GlobalStyles } from './styles/GlobalStyles'
import { Board } from './components/Board/index'
import { Settings } from './components/Seting'

export const App = () => {
  return (
  <>
    <GlobalStyles />
    <Board />
    <Settings />
  </>  
  )
}