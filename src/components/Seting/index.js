import { Button } from "../Button"
import { SettingsSection, Tittle } from "./styles"

export const Settings = ({
  cards,
  players,
  gameConfig,
  gameState,
  setGameConfig,
  setGameState
}) => {
  console.log(gameConfig.gameMode)

  return (
    <>
  <SettingsSection>
    <Tittle>Tipo de cartas</Tittle>
      <Button 
        className='Num' 
        value='Num'
        gameStateKey='typeOfCards'
        setFunction={setGameConfig}
      />
      <Button 
        className='Img' 
        value='Img'
        gameStateKey='typeOfCards'
        setFunction={setGameConfig}
      />
    <Tittle>Game Mode</Tittle>
      <Button 
        className='Speed_Run'
        gameStateKey='gameMode'
        value='Speed_Run'
        setFunction={setGameConfig}
      />
      <Button 
        className='Dead_Line'
        gameStateKey='gameMode'
        value='Dead_Line'
        setFunction={setGameConfig}
      />
      {(gameConfig.gameMode === 'Dead_Line') && (
        <>
          <p
          className='timer_Pad'
          >
            {gameConfig.time}
          </p>
          <Button 
            className='increase-seconds'
            gameStateKey='time'
            value={5000}
            setFunction={setGameConfig}
          />
          <Button 
            className='decrease-seconds'
            gameStateKey='time'
            value={-5000}
            setFunction={setGameConfig}
          />
        </>
      )}
    <Tittle>Número de pares {cards.length / 2}</Tittle>
      <Button
        className='5 Pares'
          value={5}
          gameStateKey='pairs'
          glowCurrentState={cards.length}
          setFunction={setGameConfig}
      />
      <Button
        className='10 Pares'
          value={10}
          gameStateKey='pairs'
          glowCurrentState={cards.length}
          setFunction={setGameConfig}
      />
      <Button
        className='20 Pares'
          value={20}
          gameStateKey='pairs'
          glowCurrentState={cards.length}
          setFunction={setGameConfig}
      />
      <Button
        className='30 Pares'
          value={30}
          gameStateKey='pairs'
          glowCurrentState={cards.length}
          setFunction={setGameConfig}
      />
    <Tittle>Número de jugadores {players.length}</Tittle>
      <Button 
        className='1 Jugador'
          value={1}
          gameStateKey='players'
          glowCurrentState={players.length}
          setFunction={setGameConfig}
      />
      <Button 
        className='2 Jugadores'
          value={2}
          gameStateKey='players'
          glowCurrentState={players.length}
          setFunction={setGameConfig}
      />
      <Button 
        className='3 Jugadores'
          value={3}
          gameStateKey='players'
          glowCurrentState={players.length}
          setFunction={setGameConfig}
      />
      <Button 
        className='4 Jugadores'
          value={4}
          gameStateKey='players'
          glowCurrentState={players.length}
          setFunction={setGameConfig}
      />
      <Button 
        className='Start Game!'
        gameStateKey='playing'
        setFunction={setGameState}
      />
    </SettingsSection>        
    </>
  )
}