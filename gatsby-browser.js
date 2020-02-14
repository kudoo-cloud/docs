import React from "react"
import { KudooThemeProvider, theme } from "@kudoo/components"
import { BrowserRouter } from "react-router-dom"
import { jss, JssProvider } from "react-jss"

export const onClientEntry = () => {
  require("@babel/polyfill")
}

// remove the JSS style tag generated on the server to avoid conflicts with the one added on the client
export const onInitialClientRender = () => {
  // eslint-disable-next-line no-undef
  const ssStyles = window.document.getElementById(`server-side-jss`)
  ssStyles && ssStyles.parentNode.removeChild(ssStyles)
}

export const wrapRootElement = ({ element }, options) => {
  return (
    <BrowserRouter>
      <JssProvider jss={jss}>
        <KudooThemeProvider theme={theme}>{element}</KudooThemeProvider>
      </JssProvider>
    </BrowserRouter>
  )
}
