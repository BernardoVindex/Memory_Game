import { Button } from "../Button"
import { SettingsSection, Tittle } from "./styles"

export const Settings = ({ configGame, setConfigGame, setCards }) => {
  
   
  return (
    <>
      <SettingsSection>
        <Tittle>Tipo de cartas {configGame.typeCards}</Tittle>
          <Button 
            className='Num' 
            value='Num'
            typeState='typeCards'
            setFunction={setCards}
          />
          <Button 
            className='Img' 
            value='Img'
            typeState='typeCards'
            setFunction={setCards}
          />
        <Tittle>Número de pares {configGame.pairs}</Tittle>
          <Button
            className='5 Pares'
             value={5}
             typeState='pairs'
             setFunction={setCards}
          />
          <Button
            className='10 Pares'
             value={10}
             typeState='pairs'
             setFunction={setCards}
          />
          <Button
            className='20 Pares'
             value={20}
             typeState='pairs'
             setFunction={setCards}
          />
          <Button
            className='30 Pares'
             value={30}
             typeState='pairs'
             setFunction={setCards}
          />
        <Tittle>Número de jugadores {configGame.players}</Tittle>
          <Button 
            className='1 Jugador'
             value='1'
             typeState='players'
             setFunction={setCards}
          />
          <Button 
            className='2 Jugadores'
             value='2'
             typeState='players'
             setFunction={setCards}
          />
          <Button 
            className='3 Jugadores'
             value='3'
             typeState='players'
             setFunction={setCards}
          />
          <Button 
            className='4 Jugadores'
             value='4'
             typeState='players'
             setFunction={setCards}
          />
          <Button 
            className='Start Game!'
            value={!configGame.start} 
            typeState='start'
            setFunction={setCards}        
          />
        </SettingsSection>        
    </>
  )
}