import { PlayerContainer } from "./styles"

export const PlayerCards = ({ player, pairs }) => {
  
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
    </PlayerContainer>
  )
}

