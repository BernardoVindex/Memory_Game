import { useState } from "react"

export const appContext = () => {
  const [pairs, setPairs] = useState(5)

  return {
    pairs
  }
}

