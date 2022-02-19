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
    startGame,
    setPlayers,
    setStartGame,
    handlerDeck,
    handlerPlayers,
    state, 
    dispatch,
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
        value={state.length / 2}
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

    {(startGame) && (
      <Timer 
        cards={state}
        players={players}
    />)}
      

    <Board
      cards={state}
      
      render = { (state, index) => (
        <Card
        key={index}
        cardID={index}
        value={state.value}
        fliped={state.fliped}
        matched={state.matched}
        dispatch={dispatch}
      />
    )}
    />

 
    {(!startGame) && (
      <ModalSection>
        <Settings
          cards={state}
          startGame={startGame}
          players={players}
          setPlayers={setPlayers}
          setStartGame={setStartGame}
          
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
        />
      )} 
    />
  </>  
  )
}


/**
  Una funcin que tome regitro del value del target 'card'

 */