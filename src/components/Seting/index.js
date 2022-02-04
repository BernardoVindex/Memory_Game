import { Button } from "../Button"
import { SettingsSection, Tittle } from "./styles"

export const Settings = ({ configGame, setConfigGame }) => {
  console.log({setConfigGame})
   
  return (
    <>
      <SettingsSection>
        <Tittle>Tipo de cartas {configGame.typeCards}</Tittle>
          <Button 
            value='Num'
            typeState='typeCards'
            setConfigGame={setConfigGame}
          />
          <Button 
            value='Img'
            typeState='typeCards'
            setConfigGame={setConfigGame}
          />
        <Tittle>Número de pares {configGame.pairs}</Tittle>
          <Button
            buttonName='5 Pares'
            typeState='pairs'
            value={5}
            setConfigGame={setConfigGame}
          />
          <Button
            buttonName='10 Pares'
            typeState='pairs'
            value={10}
            setConfigGame={setConfigGame}
          />
          <Button
            buttonName='20 Pares'
            typeState='pairs'
            value={20}
            setConfigGame={setConfigGame}
          />
          <Button
            buttonName='30 Pares'
            typeState='pairs'
            value={30}
            setConfigGame={setConfigGame}
          />
        <Tittle>Número de jugadores {configGame.players}</Tittle>
          <Button 
            value='1'
            typeState='players'
            setConfigGame={setConfigGame}
          />
          <Button 
            value='2'
            typeState='players'
            setConfigGame={setConfigGame}
          />
          <Button 
            value='3'
            typeState='players'
            setConfigGame={setConfigGame}
          />
          <Button 
            value='4'
            typeState='players'
            setConfigGame={setConfigGame}
          />
          <Button 
            value={!configGame.start}
            typeState='start'
            buttonName='Start Game!'
            setConfigGame={setConfigGame}        
          />
        </SettingsSection>        
    </>
  )
}