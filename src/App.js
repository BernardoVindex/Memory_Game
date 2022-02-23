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
 *  - - By time *
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
 ** Questions
 * - Where shoud I write tun´s logic?
 */


export const App = () => {

  const {
    players,
    setPlayers,

    startGame,
    setStartGame,

    timeLeft,
    setTimeLeft, 
    
    handlerDeck,
    handlerPlayers,

    deck, 
    deckDispatchs,

    gameState, 
    gameDispatch,
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
        value={deck.length / 2}
        typeState='restart'
        setFunction={handlerDeck}
      />
      <Button
        className='Settings'
        value={false} 
        typeState='settingOn'
        setFunction={setStartGame}
      />
    </HeaderApp>

    {(gameState.playing) && (
      <Timer 
        cards={deck}
        players={players}
        setStartGame={setStartGame}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        
    />)}

    <Board
      cards={deck}
      
      render = { (card, index) => (
        <Card
        key={index}
        cardID={index}
        value={card.value}
        fliped={card.fliped}
        matched={card.matched}
        deckDispatch={deckDispatch}
      />
    )}
    />

 
    {(gameState.setteings) && (
      <ModalSection>
        <Settings
          cards={deck}
          players={players}
          setPlayers={setPlayers}

          
          handlerDeck={handlerDeck}
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
          pairs={player.pairs}  
          status={player.status}
        />
      )} 
    />
  </>  
  )
}


/**
  Una funcin que tome regitro del value del target 'card'

 */