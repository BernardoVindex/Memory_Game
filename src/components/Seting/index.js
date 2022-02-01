import { Button } from "../Button"

export const Settings = (props) => {
   console.log({props})
  
  return (
    <>
      <h2>Tipo de cartas {props.configGame.typeCards}</h2>
        <Button 
          value='Num'
        />
        <Button 
          value='Img'
        />
      <h2>Número de pares {props.configGame.pairs}</h2>
        <Button
          buttonName='8 Pares'
          value='8'
        />
        <Button
          buttonName='14 Pares'
          value='14'
        />
        <Button
          buttonName='20 Pares'
          value='20'
        />
        <Button
          buttonName='26 Pares'
          value='26'
        />
      <h2>Número de jugadores {props.configGame.players}</h2>
        <Button 
          value='1'
        />
        <Button 
          value='2'
        />
        <Button 
          value='3'
        />
        <Button 
          value='4'
        />
        <Button 
          buttonName='Start Game!'
        />
    </>
  )
}