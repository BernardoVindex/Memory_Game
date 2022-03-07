import { Button } from "../Button"
import { SettingsSection, Tittle } from "./styles"

export const Settings = ({
  cards,
  players,
  gameConfig,
  setGameConfig,
}) => {

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
      {(gameConfig.gameMode === 'countDown') && (
        <>
        <Button 
            className='increase-seconds'
            gameStateKey='time'
            value={5000}
            setFunction={setGameConfig}
        />
        <p
        className='timer_Pad'
        >
          {gameConfig.time}
        </p>
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
        setFunction={setGameConfig}
      />
      <Button
        className='10 Pares'
        value={10}
        gameStateKey='pairs'
        setFunction={setGameConfig}
      />
      <Button
        className='20 Pares'
        value={20}
        gameStateKey='pairs'
        setFunction={setGameConfig}
      />
      <Button
        className='30 Pares'
        value={30}
        gameStateKey='pairs'
        setFunction={setGameConfig}
      />
    <Tittle>Número de jugadores {players.length}</Tittle>
      <Button 
        className='1 Jugador'
        value={1}
        gameStateKey='players'
        setFunction={setGameConfig}
      />
      <Button 
        className='2 Jugadores'
        value={2}
        gameStateKey='players'
        setFunction={setGameConfig}
      />
      <Button 
        className='3 Jugadores'
        value={3}
        gameStateKey='players'
        setFunction={setGameConfig}
      />
      <Button 
        className='4 Jugadores'
        value={4}
        gameStateKey='players'
        setFunction={setGameConfig}
      />
      <Button   
        className='Start Game!'
        value='playing'
        gameStateKey='gameStatus'
        setFunction={setGameConfig}
      />
    </SettingsSection>        
    </>
  )
}