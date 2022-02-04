import { PlayerContainer } from "./styles"

export const PlayerCards = (props) => {
  return (
    <PlayerContainer>
      <h3>Player {props.player}</h3>
    </PlayerContainer>
  )
}