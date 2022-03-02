import { Button } from "../Button"
import { SettingsSection, Tittle } from "./styles"

export const Settings = ({
  cards,
  players,
  deckDispatch,
  gameDispatch,
  playersDispatch,
}) => {
  
  return (
    <>
      <SettingsSection>
        <Tittle>Tipo de cartas</Tittle>
          <Button 
            className='Num' 
            value='Num'
            type='typeCards'
          />
          <Button 
            className='Img' 
            value='Img'
            type='typeCards'
          />
        <Tittle>Game Mode</Tittle>
          <Button 
            className='Speed Run'          
            type='chronometer'
          />
          <Button 
            className='DeadLine'
            type='countDown'
          />
          <input
            className='timer'
          >
          </input>
        <Tittle>Número de pares {cards.length / 2}</Tittle>
          <Button
            className='5 Pares'
             value={5}
             type='newDeck'
             dispatch={deckDispatch}
             glowCurrentState={cards.length}
          />
          <Button
            className='10 Pares'
             value={10}
             type='newDeck'
             dispatch={deckDispatch}
             glowCurrentState={cards.length}
          />
          <Button
            className='20 Pares'
             value={20}
             type='newDeck'
             dispatch={deckDispatch}
             glowCurrentState={cards.length}
          />
          <Button
            className='30 Pares'
             value={30}
             type='newDeck'
             dispatch={deckDispatch}
             glowCurrentState={cards.length}
          />
        <Tittle>Número de jugadores {players.length}</Tittle>
          <Button 
            className='1 Jugador'
             value={1}
             type='makeParty'
             dispatch={playersDispatch}
             glowCurrentState={players.length}
          />
          <Button 
            className='2 Jugadores'
             value={2}
             type='makeParty'
             dispatch={playersDispatch}
             glowCurrentState={players.length}
          />
          <Button 
            className='3 Jugadores'
             value={3}
             type='makeParty'
             dispatch={playersDispatch}
             glowCurrentState={players.length}
          />
          <Button 
            className='4 Jugadores'
             value={4}
             type='makeParty'
             dispatch={playersDispatch}
             glowCurrentState={players.length}
          />
          <Button 
            className='Start Game!'
            type='playing'
            dispatch={gameDispatch}        
          />
        </SettingsSection>        
    </>
  )
}