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
import { Brake } from './components/Brake'
import { PrepTimer } from './components/PerpTimer'
//ALKA-CIP/ACID-CIP
/** To program:
 * - Create one Component for countdown and other for timer
 * - Conexión to API Instagram
 * - Glow on clicked buttons
 * - App´s Logo 
 * - LocalStorage saving
 * - Media Queries to Tablet/desktop
 * - Style variables and styleMode
 * - Win screan
 * - App´s Animation
 * 
 ** Bugs
 * - Click settings or 'Start Game!' must change deck
 * - Disabled cards when Timer is on count down Preparation
 * 
 ** Isues
 * - Refactor useTimer
 */


export const App = () => {

  const {
    deck,
    deckGenerator,
    changeCardsValues,
    evalPairFliped,

    players,
    partyGenerator,
    changePlayerValues,

    gameState, 
    changeGameState,

    gameConfig, 
    setGameConfig,

    checkForPlayers
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
        gameStateKey='pairs'
        setFunction={setGameConfig}
      />
      <Button
        className='Settings'
        value='configuring'
        gameStateKey='gameStatus'
        setFunction={setGameConfig}
      />
    </HeaderApp>

    {(gameConfig.gameStatus === 'playing') && (
      <>
      <PrepTimer 
        gameConfig={gameConfig}
      >
        <Timer 
          cards={deck}
          players={players}
          gameConfig={gameConfig}


          setGameConfig={setGameConfig}
          changePlayerValues={changePlayerValues}
          checkForPlayers={checkForPlayers}
        />
      </PrepTimer>
      </>
    )}

    {(gameConfig.gameStatus === 'gameBoard') && (
      <p>Winers!!</p>
    )}

    {(gameConfig.gameStatus === 'configuring') && (
      <ModalSection>
        <Settings
          cards={deck}
          players={players}
          gameConfig={gameConfig}
          setGameConfig={setGameConfig}
        />
      </ModalSection>
    )}

    {(gameConfig.gameStatus === 'brake') && (
      <ModalSection>
        <Brake 

        />
      </ModalSection>
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
          changeCardsValues={changeCardsValues}
          changePlayerValues={changePlayerValues}
      />
      )}
    />

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