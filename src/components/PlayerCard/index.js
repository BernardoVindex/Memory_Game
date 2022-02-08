import { PlayerContainer } from "./styles"

export const PlayerCards = (props) => {
  return (
    <PlayerContainer>
      <h3
        className='playerNumber'
      >
        Player {props.player}
      </h3>
      <p
        className='movesPerTurn'
      >
        Moves: {props.moves}
      </p>
      <p
        className='pairsObtained'
      >
        Pairs: {props.pairs}
      </p>
      <p
        className='timeRecord'
      >
        Time: {props.time}
      </p>
    </PlayerContainer>
  )
}