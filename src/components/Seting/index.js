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
            buttonName='8 Pares'
            typeState='pairs'
            value={8}
            setConfigGame={setConfigGame}
          />
          <Button
            buttonName='14 Pares'
            typeState='pairs'
            value={14}
            setConfigGame={setConfigGame}
          />
          <Button
            buttonName='20 Pares'
            typeState='pairs'
            value={20}
            setConfigGame={setConfigGame}
          />
          <Button
            buttonName='26 Pares'
            typeState='pairs'
            value={26}
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