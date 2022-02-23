import { Button } from "../Button"
import { SettingsSection, Tittle } from "./styles"

export const Settings = ({
  cards,
  players,
  setOpenModal,
  setStartGame,
  handlerDeck,
  handlerPlayers,
}) => {
    
  return (
    <>
      <SettingsSection>
        <Tittle>Tipo de cartas {}</Tittle>
          <Button 
            className='Num' 
            value='Num'
            typeState='typeCards'
          />
          <Button 
            className='Img' 
            value='Img'
            typeState='typeCards'
          />
        <Tittle>Número de pares {cards.length / 2}</Tittle>
          <Button
            className='5 Pares'
             value={5}
             typeState='pairs'
             setFunction={handlerDeck}
          />
          <Button
            className='10 Pares'
             value={10}
             typeState='pairs'
             setFunction={handlerDeck}
          />
          <Button
            className='20 Pares'
             value={20}
             typeState='pairs'
             setFunction={handlerDeck}
          />
          <Button
            className='30 Pares'
             value={30}
             typeState='pairs'
             setFunction={handlerDeck}
          />
        <Tittle>Número de jugadores {players.length}</Tittle>
          <Button 
            className='1 Jugador'
             value='1'
             typeState='players'
             setFunction={handlerPlayers}
          />
          <Button 
            className='2 Jugadores'
             value='2'
             typeState='players'
             setFunction={handlerPlayers}
          />
          <Button 
            className='3 Jugadores'
             value='3'
             typeState='players'
             setFunction={handlerPlayers}
          />
          <Button 
            className='4 Jugadores'
             value='4'
             typeState='players'
             setFunction={handlerPlayers}
          />
          <Button 
            className='Start Game!'
            value={false} 
            typeState='start'
            setFunction={setOpenModal}        
          />
        </SettingsSection>        
    </>
  )
}