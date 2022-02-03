import { GlobalStyles } from './styles/GlobalStyles'
import { Board } from './components/Board/index'
import { Settings } from './components/Seting'
import { useAppContext } from './useAppContext'
import { ModalSection } from './components/Modal/styles'
import { Button } from './components/Button'
import { HeaderApp } from './components/Header'
import { FooterApp } from './components/Footer'

export const App = () => {
  
  const {
    cards,
    configGame,
    openModal, 
    setOpenModal,
    setConfigGame
    } = useAppContext()


  return (
  <>
    <GlobalStyles />
    <HeaderApp>
      <div>
        Logo
      </div>
      <Button
        value={!configGame.start}
        typeState='start'
        buttonName='Restart'
        setConfigGame={setConfigGame}         
      />
      <Button
        value={true}
        typeState='settingOn'
        buttonName='Settings'
        setConfigGame={setOpenModal}     
      />
 
    </HeaderApp>
    
    <Board
      cards={cards}
    /> 
 
    {(openModal.settingOn) && (
      <ModalSection>
        <Settings
          configGame={configGame}
          setConfigGame={setConfigGame}
        />
      </ModalSection>
    )}

    <FooterApp>
    </FooterApp>
  </>  
  )
}
