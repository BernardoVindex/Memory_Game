import { Footer } from "./styles"

export const FooterApp = (props) => {
  const renderFunc = props.render
    
  return (
      <Footer
        className="footer"
      >
        {props.players.map(renderFunc)}
      </Footer>
  )
}