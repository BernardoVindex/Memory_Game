import { GlobalStyles } from './styles/GlobalStyles'
import { Board } from './components/Board/index'
import { Settings } from './components/Seting'
import { useAppContext } from './useAppContext'
import { ModalSection } from './components/Modal/styles'
import { Button } from './components/Button'
import { HeaderApp } from './components/Header'
import { FooterApp } from './components/Footer'
import { PlayerCards } from './components/PlayerCard'
import { Card } from './components/Card'

export const App = () => {
  
  const {
    cards,
    configGame,
    openModal, 
    players, 
    setCards,
    setPlayers,
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
        className='Restart'
        value={!configGame.start}
        typeState='start'
        setConfigGame={setConfigGame}
        setFunction={setCards}
        
      />
      <Button
        className='Settings'
        value={true} 
        typeState='settingOn'
        setFunction={setOpenModal}
      />
    </HeaderApp>
    
    {/* <Board
      cards={cards}
    /> */}

    <Board
      cards={cards}

      render = { (card, index) => (
        <Card 
        key={index}
        value={card.value}
        fliped={card.fliped}
        matched={card.matched}
        setCards={card.setCards}
      />
    )}
    />
      {/* { (card)=> (
          <Card 
          key={card.id}
          value={card.value}
        />
      )} */}
    {/* </Board>  */}
 
    {(openModal.settingOn) && (
      <ModalSection>
        <Settings
          configGame={configGame}
          setConfigGame={setConfigGame}
          setCards={setCards}
        />
      </ModalSection>
    )}

    <FooterApp
      players={players}
      setPlayers={setPlayers}

      render = { player => (
        <PlayerCards
          key={player.playerNum}
          player={player.playerNum}
        />
      )} 
    />
      {/* { player => (
        <PlayerCards
          key={player.playerNum}
          player={player.playerNum}
        />
      )}  */}
    {/* </FooterApp> */}
    
  </>  
  )
}


/**
  Una funcin que tome regitro del value del target 'card'

 */