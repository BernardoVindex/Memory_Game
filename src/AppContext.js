import { useState } from "react"

export const appContext = () => {
  const [pairs, setPairs] = useState(8)

  return {
    pairs,
    setPairs
  }
}

