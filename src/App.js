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
 * - Reset Time at changes 
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
    playersDispatch,

    deck, 
    deckDispatch,

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
        type='newDeck'
        dispatch={deckDispatch}
      />
      <Button
        className='Settings'
        value={false} 
        type='configuring'
        dispatch={gameDispatch}
      />
    </HeaderApp>

    {(gameState.playing) && (
      <Timer 
        cards={deck}
        players={players}
        playersDispatch={playersDispatch}
        gameDispatch={gameDispatch}
        
    />)}

    {(gameState.gameBoard) && (
      <p>Winers!!</p>
    )}

    <Board
      cards={deck}
      
      render = { (card, index) => (
        <Card
        key={index}
        cardID={index}
        value={card.value}
        fliped={card.fliped}
        matched={card.matched}
        dispatch={deckDispatch}
        playersDispatch={playersDispatch}
      />
    )}
    />

 
    {(gameState.setteings) && (
      <ModalSection>
        <Settings
          cards={deck}
          players={players}


          deckDispatch={deckDispatch}
          gameDispatch={gameDispatch}
          playersDispatch={playersDispatch}
        />
      </ModalSection>
    )}

    <FooterApp
      players={players}

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