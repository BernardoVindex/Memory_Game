import { GlobalStyles } from './styles/GlobalStyles'
import { Board } from './components/Board/index'
import { Settings } from './components/Seting'
import { useAppContext } from './useAppContext'
import { ModalSection } from './components/Modal/styles'
import { Button } from './components/Button'
import { HeaderApp } from './components/Header'
import { Timer } from './components/Timer'
import { FooterApp } from './components/Footer'
import { PlayerCards } from './components/PlayerCard'
import { Card } from './components/Card'

/** To program:
 * - Turn´s logic
 *  - - By time
 *  - - By round
 * - Card´s Animation
 * - Conexión to API Instagram
 * - Glow on clicked buttons
 * - App´s Logo 
 * - LocalStorage saving
 * - Media Queries to Tablet/desktop
 * - Style variables and styleMod
 * - Win screan
 * 
 ** Issues
 * - 
 */


export const App = () => {

  const {
    cards,
    openModal,
    players,
    setCards,
    setPlayers,
    setOpenModal,
    
    handlerDeck,
    handlerShuffler,
    handlerPlayers,
    flipCard,
    evalPairFliped,
    } = useAppContext()

  return (
  <>
    <GlobalStyles />
    <HeaderApp>
      <div>
        Logo
      </div>
      <Timer>

      </Timer>
      <Button
        className='Restart'
        value={cards.length / 2}
        typeState='restart'
        setFunction={handlerDeck}
      />
      <Button
        className='Settings'
        value={true} 
        typeState='settingOn'
        setFunction={setOpenModal}
      />
    </HeaderApp>

    <Board
      cards={cards}
      evalPairFliped={evalPairFliped}
      
      render = { (card, index) => (
        <Card 
        key={index}
        cardID={index}
        value={card.value}
        fliped={card.fliped}
        matched={card.matched}
        flipCard={flipCard}
      />
    )}
    />

 
    {(openModal) && (
      <ModalSection>
        <Settings
          cards={cards}
          openModal={openModal}
          players={players}
          setCards={setCards}
          setPlayers={setPlayers}
          setOpenModal={setOpenModal}
          
          handlerDeck={handlerDeck}
          handlerShuffler={handlerShuffler}
          handlerPlayers={handlerPlayers}
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
  </>  
  )
}


/**
  Una funcin que tome regitro del value del target 'card'

 */