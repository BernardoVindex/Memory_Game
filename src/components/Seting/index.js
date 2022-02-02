import { Button } from "../Button"

export const Settings = ({ configGame, setConfigGame }) => {
  console.log({setConfigGame})
   
  return (
    <>        
      <h2>Tipo de cartas {configGame.typeCards}</h2>
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
      <h2>Número de pares {configGame.pairs}</h2>
        <Button
          buttonName='8 Pares'
          typeState='pairs'
          value='8'
          setConfigGame={setConfigGame}
        />
        <Button
          buttonName='14 Pares'
          typeState='pairs'
          value='14'
          setConfigGame={setConfigGame}
        />
        <Button
          buttonName='20 Pares'
          typeState='pairs'
          value='20'
          setConfigGame={setConfigGame}
        />
        <Button
          buttonName='26 Pares'
          typeState='pairs'
          value='26'
          setConfigGame={setConfigGame}
        />
      <h2>Número de jugadores {configGame.players}</h2>
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
    </>
  )
}