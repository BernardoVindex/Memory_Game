import { PlayerContainer } from "./styles"

export const PlayerCards = ({ player, pairs, status }) => {
  return (
    <PlayerContainer>
      <h3
        className='playerNumber'
      >
        P{player}
      </h3>
      <p
        className='movesPerTurn'
      >
        {pairs}
      </p>
      <p>
        {status}
      </p>
    </PlayerContainer>
  )
}

