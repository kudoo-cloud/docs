import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { theme, KudooThemeProvider } from '@kudoo/components'
import { JssProvider, SheetsRegistry } from 'react-jss'
import { renderToString } from 'react-dom/server'

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents
}) => {
  const sheets = new SheetsRegistry()
  const bodyHTML = renderToString(
    <StaticRouter>
      <JssProvider registry={sheets}>
        <KudooThemeProvider theme={theme}>{bodyComponent}</KudooThemeProvider>
      </JssProvider>
    </StaticRouter>
  )

  replaceBodyHTMLString(bodyHTML)
  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{ __html: sheets.toString() }}
    />
  ])
}