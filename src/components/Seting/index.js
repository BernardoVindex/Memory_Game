import { useAppContext } from "../../useAppContext"
import { Button } from "../Button"

export const Settings = () => {
  const {
    typeCards,
    pairs,
    players,
    start,
    setPairs,
    setTypeCards,
    setPlayers,
    setStart
  } = useAppContext()


  return (
    <>
      <h2>Tipo de cartas {typeCards}</h2>
        <Button 
          value='Num'
          setFunction={setTypeCards}
        />
        <Button 
          value='Img'
          setFunction={setTypeCards}
        />
      <h2>Número de pares {pairs}</h2>
        <Button
          buttonName='8 Pares'
          value='8'
          setFunction={setPairs}
        />
        <Button
          buttonName='14 Pares'
          value='14'
          setFunction={setPairs}
        />
        <Button
          buttonName='20 Pares'
          value='20'
          setFunction={setPairs}
        />
        <Button
          buttonName='26 Pares'
          value='26'
          setFunction={setPairs}
        />
      <h2>Número de jugadores {players}</h2>
        <Button 
          value='1'
          setFunction={setPlayers}
        />
        <Button 
          value='2'
          setFunction={setPlayers}
        />
        <Button 
          value='3'
          setFunction={setPlayers}
        />
        <Button 
          value='4'
          setFunction={setPlayers}
        />
        <Button 
          buttonName='Start Game!'
          value={!start}
          setFunction={setStart}
        />
    </>
  )
}