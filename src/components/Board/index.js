import { useEffect } from "react"
import { GridSection } from "./styles"

export const Board = ({ cards, render }) => {

  useEffect(() => {

  },[])

  return (
    <>
      <GridSection>
         {cards.map(render)}
      </GridSection>
    </>
  )
}






















