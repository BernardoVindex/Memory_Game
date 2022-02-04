import { Footer } from "./styles"

export const FooterApp = (props) => {
  const renderFunc = props.children || props.rende
    
  return (
    <>
      <Footer>
      {props.players.map(renderFunc)}
      {props.children}
      </Footer>
    </>
  )
}