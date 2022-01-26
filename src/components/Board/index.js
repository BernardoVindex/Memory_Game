import { useState } from 'react'
import { Card } from '../Card/index'

export const Board = () => {
  const [pairs, setPairs] = useState(8)
  
  return (
    <>
      <Card />
    </>
  )
}