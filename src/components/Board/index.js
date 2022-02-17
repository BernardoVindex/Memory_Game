import { useEffect } from "react"
import { GridSection } from "./styles"

export const Board = ({ cards, render }) => {

  return (
    <>
      <GridSection>
         {cards.map(render)}
      </GridSection>
    
    </>
  )
}






















