import { Footer } from "./styles"

export const FooterApp = ({ players, render }) => {
  const renderFunc = render
    
  return (
      <Footer
        className="footer"
      >
        {players.map(renderFunc)}
      </Footer>
  )
}